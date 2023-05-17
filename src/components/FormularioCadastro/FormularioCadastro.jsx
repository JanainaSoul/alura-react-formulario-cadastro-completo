import { Typography } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({aoEnviar, validarCPF}) {
  const [etapaAtual, setEtapaAtual] = useState(0); //função assincrona
  const [dadosColetados, setDados] = useState({});
  
  useEffect(()=>{
    console.log(dadosColetados)
  })

  const formularios = [
  <DadosUsuario aoEnviar={coletarDados}/>, 
  <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF}/>, 
  <DadosEntrega aoEnviar={coletarDados}/>   
];

function coletarDados(dados){
  setDados({...dadosColetados, ...dados})
  //console.log(dadosColetados);
  proximo();
}

function proximo(){
  setEtapaAtual(etapaAtual+1);
}  

  return <> {formularios[etapaAtual]} </>;
}

export default FormularioCadastro;
