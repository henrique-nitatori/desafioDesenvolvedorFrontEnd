import React, { useState } from 'react'

import '../styles/components/Form.css'

import Button from '../components/Button'
import { FormEvent } from 'react'

 export interface FormasGeometricas {
    nome: string;
    forma: string;
    tamanho: number;
    cor: string;
}

export interface IForm {
    handleCreate: (formas: FormasGeometricas) => void
}


export default function Form({ handleCreate }: IForm) {
    const [nome, setNome] = useState('')
    const [forma, setForma] = useState('')
    const [tamanho, setTamanho] = useState(0)
    const [cor, setCor] = useState('#FFFFFF')

    function clearState() {
        setNome('')
        setForma('')
        setTamanho(0)
        setCor('#FFFFFF')
    }
    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        handleCreate({
            nome,
            forma,
            tamanho,
            cor
        })
        clearState()
    }


    return(
        <div id="form">
            <h2>Criar uma forma geometrica</h2>
            <form onSubmit={e => handleSubmit(e)}>
                <section>
                <div className="input">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" value={nome} onChange={e => setNome(e.target.value)}/>
                </div>
                <div className="input select">
                <label htmlFor="formas">Formas</label>

                <select id="formas" value={forma} onChange={e => setForma(e.target.value)}>
                    <option value=""></option>
                    <option value="quadrado">Quadrado</option>
                    <option value="triangulo">Triângulo</option>
                </select>

                </div>
                <div className="input">
                    <label htmlFor="cor">Cor</label>
                    <input type="color" id="cor" value={cor} onChange={e => setCor(e.target.value)}/>
                </div>
                    <div className="input">
                        <label htmlFor="largura" >Tamanho</label>
                        <input type="number" id="largura"value={tamanho} onChange={e => setTamanho(Number(e.target.value))}/>
                    </div>
                </section>
                <div className="div-button">
                    <Button buttonText="Criar" onClick={() => {}} type="submit"/> 
                </div>
            </form>
 
        </div>
    )
}