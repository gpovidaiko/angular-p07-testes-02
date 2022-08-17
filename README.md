# angular-p07-testes-02

Aplicação para estudo de Angular.

Projeto desenvolvido ao longo de curso realizado, com a motivação de práticar o desenvolvimento de testes em projetos Angular. Continuação do projeto _'[angular-p06-testes-01](https://github.com/gpovidaiko/angular-p06-testes-01)'_, desenvolvido em módulo anterior.

## 01. Novo componente, nova complexidade

Criação do componente _PhotoFrame_ que conterá uma imagem e utilizará o componente _LikeWidget_. Durante a criação do componente _PhotoFrame_ foi aproveitado para revisar os conceitos sobre testes vistos no módulo anterior.
Através da biblioteca _RxJs_ foi implementado um _debounce_ de 500 ms na emissão do evento de curtir no componente _PhotoFrame_ para tratar a múltipla emissão desse evento através de vários cliques. Assim, o evento de curtida só é emitido pelo componente 500 ms após o último clique.

## 02. Testes temporais e de integração com o _DOM_

Visto elaboração de testes que exigem controle de tempo e testes relacionados ao _template_ do componente.
Sobre os testes com controle de tempo, utilizando como cobaia o _debounce_ implementado para a emissão do evento de curtida, foram apresentadas as funções _fakeAsync_ e _tick_.
A função _fakeAsync_ serve para envelopar a função do teste unitário, e possibilita a utilização de alguns artifícios para se trabalhar com assincronismo.
A utilização da função _tick_ fica disponível dentro da função do teste unitário, quando está é envolta pela função _fakeAsync_. Através da função _tick_ podemos passar uma quantidade de tempo em ms, que será o tempo de pausa para dar continuidade a execução do teste.
Sobre os testes de _template_ do componente, foi visto como obter o elemento raiz do _template_ através do atributo _ComponentFixture.nativeElement_. Através do elemento raiz é possível encontrar outros elementos _HTML_ no _DOM_ do componente através de _querySelector_ e através dessa técnica testarmos valores de atributos e conteúdo do elemento alvo dos nossos teste. Vale frisar que o _DOM_ gerado do componente também será composto por _templates_ de componentes internos. 
Comentado sobre a conveção de indicar que o teste unitário é relacionado à _template_ na descrição, a princípio utilizando um prefixo _'(D)'_ de _DOM_ na descrição do teste, mas seguimos utilizando _'<Template>'_.

## 03. Lidando com eventos da _UI_

Visto como simular eventos de _UI_, como de clique e de teclado, através do método _HTMLElement.dispatchEvent_, que recebe uma instância com informações de acordo com o tipo de evento. Cliques também são possíveis de simular através da própria função _HTMLElement.click_.
Implementado diretiva para unificar os eventos de clique e de tecla _'Enter'_ pressionada, com a promessa de eles compartilharem a mesma chamada de método, mas o real incentivo foi para ver como implementar testes unitários em diretivas.
Visto método de teste de diretivas utilizando um componente básico e simples, implementado diretamente no arquivo de teste e através de uma instância de _ComponentFixture_ desse componente que podemos acessar o elemento _HTML_ que utiliza a diretiva e testar o seu comportamento. Achei interessante e convencional chamar este componente de _DumbComponent_
Comentado sobre a diferença entre se trabalhar com _ComponentFixture.debugElement_ e _ComponentFixture.nativeElement_. Ambos são formas de acessar o elemento raiz do _template_, sendo o _ComponentFixture.debugElement_ uma espécie de camada para acessar a instância de _ComponentFixture.nativeElement_, disponibilizando alguns métodos utilitarios para _debugar_ o _template_ de maneira diferente.

## 04. Cuidados com a abstração do Angular

Criado serviço para recuperar uma lista de fotos através da _API_ disponibilizada para o projeto.
Criado o componente _PhotoBoard_ para renderizar uma lista de fotos utilizando _PhotoFrame_. Renderizando a lista de fotos em 4 colunas. Como o componente recebe a lista como _Input_, é feito um pré-processamento na implementação do método _ngOnChanges_, para distribuir essa lista em uma matriz de 4 colunas sempre que houver atualização do valor.
Para testar a lógica implementada nessa seção, o arquivo de testes do componente teve implementado uma função para montar uma lista com determinada quantidade de elementos. Essa lista sendo instânciada e atribuída à propriedade do componente. Com isso, foi mencionada a peculiaridade de se testar uma lógica presente na implementação do método _ngOnChanges_.
Foram apresentados dois caminhos para disparar a execução do método _onChanges_. A primeira programaticamente, através da instânciação do classe SimpleChanges, passada como parâmetro de entrada do método. A segunda através da utilização de um _DumbComponent_, responsável por passar o valor de _Input_ para o componente e disponibilizar acesso para a instância do mesmo.
