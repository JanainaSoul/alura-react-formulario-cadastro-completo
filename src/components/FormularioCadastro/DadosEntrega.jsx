import { TextField, Button } from '@material-ui/core';
import React from 'react';

function DadosEntrega() {
    return (
        <form> 
            <TextField 
                id="cep" 
                label="CEP" 
                type="number" 
                variant="outlined"
                margin="normal"
            />

            <TextField 
                id="endereco" 
                label="endereco" 
                type="text" 
                variant="outlined"
                margin="normal"
                fullWidth 
            />

            <TextField 
                id="numero" 
                label="numero" 
                type="number" 
                variant="outlined"
                margin="normal"
                />

            <TextField 
                id="Estado" 
                label="Estado" 
                type="text" 
                variant="outlined"
                margin="normal"
            />

            <TextField 
                id="Cidade" 
                label="Cidade" 
                type="text" 
                variant="outlined"
                margin="normal"
            />

            <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                fullWidth
            > 
                Finalizar Cadastro
            </Button>
        </form>

    )
}

export default DadosEntrega;
