import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import '@fontsource/roboto';
import {Container, Typography } from "@material-ui/core"

import {validarCPF, validarSenha} from './modelos/cadastro'
//import ValidacoesCadastro from "./context/ValidacoesCadastro";

import ValidacoesCadastro from "./context/ValidacoesCadastro";


class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >
          Formulário de cadastro
        </Typography>
        <ValidacoesCadastro.Provider>
          <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
      <FormularioCadastro aoEnviar={aoEnviarForm} />
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}



export default App;
