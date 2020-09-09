import React from 'react'

import './form.css'
import Card from '../card/card'
import Close from '../../assets/icons/close-24px.svg'
import Button from '../button/button'

export default props => {
    const error = (
            props.openError ?
        <div>
            <span style={{color:'red'}}>Preencha corretamente o formulário</span>
        </div>
        : null
    )
    return (
        <div className='contentModal'>
            <Card 
                width='600px'
                height='550px'> 
                <div className='formContent'>
                    <header>
                        <img 
                            onClick={props.showModal}
                            src={Close} 
                            alt='Fechar'/>
                    </header>
                    <div className='contentTable'>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label htmlFor='nome'>Nome</label></td>
                                    <td>
                                        <input 
                                            type='text' 
                                            id='nome' 
                                            name='nome'
                                            value={props.state.nome}
                                            onChange={props.handleInputChange} 
                                            required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='formas'>Tipo</label></td>
                                    <td>
                                        <select 
                                            value={props.state.tipo}
                                            onChange={props.handleInputChange}
                                            name='tipo'
                                            id="formas"
                                            required>
                                            <option value="">Selecione um tipo de forma:</option>
                                            <option value="quadrado">Quadrado</option>
                                            <option value="triangulo">Triângulo</option>
                                        </select>        
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='cor'>Cor</label></td>
                                    <td>
                                        <input 
                                            value={props.state.cor}
                                            onChange={props.handleInputChange}
                                            type='color' 
                                            name='cor'
                                            id='cor'
                                            required/>  
                                    </td>          
                                </tr>
                                <tr>
                                    <td><label htmlFor='tamanho'>Tamanho</label></td>
                                    <td>
                                        <input 
                                            value={props.state.tamanho}
                                            onChange={props.handleInputChange}
                                            type='number' 
                                            name='tamanho'
                                            id='tamanho'
                                            required/> 
                                        <label htmlFor='tamanho'>pixels</label> 
                                    </td>         
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {error}
                </div>
                <div className='buttonPanel'>
                    <section>
                        <Button 
                            action={props.createGeometricShapes}
                            text='Salvar'/>
                    </section>
                </div>
            </Card>
        </div>
    )
}