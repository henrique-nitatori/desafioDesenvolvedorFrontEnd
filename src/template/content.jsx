import React, {Component} from 'react'

import './content.css'
import Button from '../components/button/button'
import Form from '../components/form/form'
import Card from '../components/card/card'
import Menu from '../components/menu/menu'

const initialState = {
    nome: '',
    tipo: '',
    cor: '#ffffff',
    tamanho: 0,
}

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            dragInType: '',
            showModal: false,
            nome: '',
            tipo: '',
            cor: '#ffffff',
            tamanho: 0,
            openError: false,
            quadrados: [],
            triangulos: []
        }
        this.showModal = this.showModal.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.createGeometricShapes = this.createGeometricShapes.bind(this)
        this.dragIn = this.dragIn.bind(this)
        this.dragDrop = this.dragDrop.bind(this)
    }
    /* Abre e fecha a modal  */
    showModal() {
        this.state.showModal ? this.setState({showModal: false}) : this.setState({showModal: true})
    }

    /* Controla os valores vindo do formulario */
    handleInputChange(event) {
        const target = event.target;
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }
    /* Cria as formar geometricas , validade o formulario e seta elas nos devidos arrays */
    createGeometricShapes() {
        const geometricShapes = {
            nome: this.state.nome,
            tipo: this.state.tipo,
            cor: this.state.cor,
            tamanho: this.state.tamanho
        }

        !this.state.nome || !this.state.tipo || !this.state.cor 
            || !this.state.tamanho ?
            this.setState({openError: true}) : this.setState({openError: false})
        
       if(this.state.tipo === 'quadrado') {
            this.setState({
                quadrados: [...this.state.quadrados, geometricShapes]
            })
       } else if (this.state.tipo === 'triangulo') {
            this.setState({
                triangulos: [...this.state.triangulos, geometricShapes]
            })
       }
       
       this.setState({...initialState})
    }
    /* Inicia o evento de arrastar */
    dragIn(index, tipo) {
        this.setState({
            index: index,
            dragInType: tipo
        })
    }
    /* Finaliza o evento de Arrastar e cria os elementos no painel de visualizacao */
    dragDrop(event) {
            const panel  =  document.getElementById('panel');
            if(panel.childElementCount > 0 ){
                for (const child of panel.children){
                    child.remove();
                }
            }
            const geometric = this.state.dragInType === 'quadrado' 
                ? this.state.quadrados[this.state.index] 
                : this.state.triangulos[this.state.index]
    
            const el = document.createElement('div')

            if(this.state.dragInType === 'triangulo') {
                el.style.width = '0px'
                el.style.height = '0px'
                el.style.borderLeft = `${geometric.tamanho}px solid transparent`
                el.style.borderRight = `${geometric.tamanho}px solid transparent`
                el.style.borderBottom = `${geometric.tamanho}px solid ${geometric.cor}`
            } else if (this.state.dragInType === 'quadrado') {
                el.style.backgroundColor = geometric.cor
                el.style.width = `${String(geometric.tamanho)}px`
                el.style.height = `${String(geometric.tamanho)}px`
            }

            panel.appendChild(el)    
    }
    render() {
        const modal = this.state.showModal ? (
            <Form
                openError={this.state.openError}
                createGeometricShapes={this.createGeometricShapes}
                handleInputChange={this.handleInputChange}
                state={this.state} 
                showModal={this.showModal}/>
        ) : null

        return(
            <div className="content">
                <h3>Desafio desenvolvedor front end</h3>
                <section className="button">
                    <Button 
                        text='Adicionar'
                        action={this.showModal}/>
                </section>
                <section className='contentPanel'>
                    <Card 
                        width='30%'
                        height='100%'> 
                        <div className='panel'>
                            <Menu   
                                dragIn={this.dragIn}
                                dragEnd={this.dragDrop}
                                square={this.state.quadrados}
                                triangle={this.state.triangulos}/>
                        </div>
                    </Card>
                    <Card 
                        width='70%'
                        height='100%'> 
                        <div 
                            id='panel'
                            onDrop={() => this.dragDrop}
                            className='panel'>
                        </div>
                    </Card>
                </section>
              
                {modal}

            </div>

        )
    }
}

export default Content