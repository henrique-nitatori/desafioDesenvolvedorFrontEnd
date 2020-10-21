import React from 'react';
import { FormasGeometricas } from './Form';


interface IFormaRender {
    forma: FormasGeometricas | undefined;
}

export default function FormRender({ forma }: IFormaRender) {
    const styles = {
        default: {
            display: 'none'
        },
        triangulo: {
            borderLeftWidth: forma?.tamanho,
            borderRightWidth: forma?.tamanho,
            borderBottomWidth: forma?.tamanho,
            borderBottomColor: forma?.cor,
            borderTopColor: 'transparent',
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderStyle: 'solid'
        },
        quadrado: {
            width: forma?.tamanho,
            height: forma?.tamanho,
            background: forma?.cor,
        }
    }

    function handleForm() {
        if(forma?.forma === 'quadrado') {
            return styles.quadrado
        }
        if(forma?.forma === 'triangulo') {
            return styles.triangulo
        }
        else {return styles.default}
    }
    
    return(
        <>
            <div style={handleForm()}>
            </div>
        </>
    )
}