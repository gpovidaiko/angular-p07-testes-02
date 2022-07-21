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
