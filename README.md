# angular-p07-testes-02

Aplicação para estudo de Angular.

Projeto desenvolvido ao longo de curso realizado, com a motivação de práticar o desenvolvimento de testes em projetos Angular. Continuação do projeto _'[angular-p06-testes-01](https://github.com/gpovidaiko/angular-p06-testes-01)'_, desenvolvido em módulo anterior.

## 01. Novo componente, nova complexidade

Criação do componente _PhotoFrame_ que conterá uma imagem e utilizará o componente _LikeWidget_. Durante a criação do componente _PhotoFrame_ foi aproveitado para revisar os conceitos sobre testes vistos no módulo anterior.
Através da biblioteca _RxJs_ foi implementado um _debounce_ de 500 ms na emissão do evento de curtir no componente _PhotoFrame_ para tratar a múltipla emissão desse evento através de vários cliques. Assim, o evento de curtida só é emitido pelo componente 500 ms após o último clique.
