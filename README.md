# Linguagens

JavaScript

HTML

CSS

# Aprendizados

01 - Entendendo o problema

Boas práticas de UX ao trabalharmos com formulários

Por que separar um formulário em muitas partes

02 - Separando Formularios

Limitações do JSX com switchs

Chamando funções dentro do JSX

Relembrando closures e escopos

vantagens da injeção de dependências dentro do projeto

Reutilização de componentes

Refatoração do Switch case e melhores estruturas de código

03 - controlando ciclo de vida 

Como lidar com problemas de assincronicidade

Quando usar o Hook de UseEffect

Ciclo de vida dos componentes funcionais

Como utilizar o componente Stepper do MaterialUI

04 - Contextos e Providers

Extraindo lógica da parte de renderização

Boas práticas na reutilização de funcionalidades

Usando contextos no React para resolver o problema de prop drilling

Problemas de informações demais e complexidade de código

05 - Hooks Customizados 

Como usar valore padrão dentro de um contexto

Porque precisamos de Providers e quais suas vantagens

Como criar Hooks Customizados e quais são suas regras

Como compartilhar código entre componentes de maneira apropriada

# Para saber mais 

Para saber mais
PRÓXIMA ATIVIDADE

No exercício anterior, utilizamos uma das formas para se utilizar renderização condicional no React, mas existem várias formas de se fazer isso!

Uma delas é a que já vimos, sendo:

function FormularioCadastro() {
  function formularioAtual(etapa) {
    switch(etapa) {
      case 0:
        return <> ... </>
      ...
      default:
        return <> ... </>
    }
  }
  return (
    <>
      {formularioAtual(etapaAtual)}
    </>
  )
}COPIAR CÓDIGO
Dessa forma, utilizamos uma função dentro do JSX para podermos executar essa função, para que isso aconteça, você deve se atentar a alguns pré-requisitos para que isso funcione:

A função deve ser executada de imediato (formularioAtual()), pois se você não executar a função, o React entende que você tá querendo renderizar uma variável e não o retorno dessa função, por isso, não funcionará.
A função deve retornar alguma coisa, normalmente se retorna uma string ou um outro JSX.
Caso esteja usando alguma variável que está no escopo do componente, a função deve estar dentro do próprio componente ou ser passada para a função via parâmetro.
Essa normalmente é usada quando precisa-se ter inúmeras condicionais para renderizar algo.

Outra forma bem conhecida de renderização condicional dentro do JSX é utilizando ternário! podemos fazer dessa forma:

function FormularioCadastro() {
  return (
    <>
      {condicao1 ? "caiu na condição 1" : "não caiu na condição"}
    </>
  )
}

Essa é a forma conhecida de se utilizar apenas uma condição, pois, imagine se precisássemos utilizar ternário para 3 condições por exemplo? Ficaria algo assim:

function FormularioCadastro() {
  return (
    <>
      {condicao1 ? "caiu na condição 1" : condicao2 ? "caiu na condição 2" : condicao3 ? "caiu na condição 3" : "não caiu em nenhuma condição"}
    </>
  )
}

Dessa forma será quase impossível de ler a condição, certo?

Outra forma de utilizar renderização condicional é antes do próprio return do componente! sabia dessa?

function FormularioCadastro() {
  if(condicao1) {
    return "caiu na condição 1"
  } else if(condicao2) {
    return "caiu na condição 2"
  } else if(condicao3) {
    return "caiu na condição 3"
  }

  return (
    <>
      "não caiu em nenhuma condição"
    </>
  )
}

Dessa forma, o retorno desses ifs é considerada o retorno do próprio componente! Logo, o código abaixo do retorno acionado será ignorado. Essa não é a forma mais bonita de se ter uma condicional, mas ela pode ser usada para loading ou erro por exemplo:

function Componente(erro, carregando) {
  if(erro) {
    return "Componente deu erro!"
  } else if(carregando) {
    return "Componente carregando..."
  }

  return "Componente funcionando!"
}

Dessa forma, o return de "Componente funcionando" só terá o código do componente quando ele não está carregando ou funcionando, então fica mais fácil de ler, porém não é muito utilizado/recomendado.

E se quisermos renderizar só se a minha condição for verdadeira? Com ternário fica assim:

function FormularioCadastro() {
  return (
    <>
      {condicao1 ? "Renderizou o que eu quero" : null}
    </>
  )
}

Dá para fazer dessa forma, mas tem uma forma muito mais limpa de escrever isso, que é com o operador AND (&&)

function FormularioCadastro() {
  return (
    <>
      {condicao1 && "Renderizou o que eu quero"}
    </>
  )
}

Dessa forma ele só mostrará caso a condição for verdadeira!

Beleza! Eu já sei executar dessas formas, mas eu quero ver algo novo, eu quero executar a função dentro do JSX! tem como?

E lá vai . . . . . . Tem sim!!! Utilizando um palavrão chamado Immediately Invoked Function Expression (ou IIFE) - https://developer.mozilla.org/pt-BR/docs/Glossary/IIFE - , é raríssimo ver isso sendo usado, mas é possível!! Dessa forma você cria uma função que se executa imediatamente!!

A sintaxe dessa função é: (função a ser executada)(parâmetro que essa função receberá). Como a função estará dentro do componente, todo o escopo dele estará dentro dessa função, então, ficaria assim:

function FormularioCadastro() {
  return (
    <>
      {(() => {
          if(condicao1) {
            return "caiu na condição 1"
          }
          return "não caiu na condição"
      })()}
    </>
  )
}COPIAR CÓDIGO
Dessa forma dá pra usar qualquer tipo de JS dentro do JSX!! Mas como não é bonito, por que não utilizar funções, ternários ou operadores não é mesmo?

Então é isso, fico por aqui e bons estudos! :D

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
