import React from 'react'

import './menu.css'
import FolderIcon from '../../assets/icons/folder-24px.svg'

export default props => {
    const geometricNameStyle = {
        marginLeft: '34px',
        cursor: 'pointer'
    }
    const square = props.square.length > 0 ? 
        props.square.map((square, i) => {
            return (
                <dd 
                    key={i} 
                    style={geometricNameStyle}>
                    <div
                        onDragEnd={() => props.dragEnd()}
                        onDragStart={() => props.dragIn(i, square.tipo)} 
                        draggable="true">
                        {square.nome}
                    </div>
                </dd>
            )
        }) : null

    const triangle = props.triangle.length > 0 ? 
    props.triangle.map((triangle, i) => {
        return (
             <dd 
                key={i} 
                style={geometricNameStyle}>
                    <div
                        onDragEnd={() => props.dragEnd()}
                        onDragStart={() => props.dragIn(i, triangle.tipo)} 
                        draggable="true">
                            {triangle.nome}
                    </div>
             </dd>
        )
     }) : null

    return (
        <div>
            <dl>
                <dt><img src={FolderIcon} alt="icone de pasta"/> Formas geométricas</dt>
                <dd>
                    <section className='geometricHeader'>
                        <img src={FolderIcon} alt="icone de pasta"/>Quadrados
                    </section>
                    <section className='geometricContent'>
                        {square}
                    </section>
                    <section className='geometricHeader'>
                        <img src={FolderIcon} alt="icone de pasta"/> Triângulo
                    </section>
                    <section className='geometricContent'>
                        {triangle}
                    </section>
                </dd>
            </dl>
        </div>
    )
}