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

     const geometricHeader = (
        props.square.length > 0 || props.triangle.length > 0 ?
            <dt><img src={FolderIcon} alt="icone de pasta"/> Formas geométricas</dt>
            : null
     )
     const squareHeader = (
        props.square.length > 0 ?
            <section className='geometricHeader'>
            <img src={FolderIcon} alt="icone de pasta"/>Quadrados
            </section>
        : null
     )
     const triangleHeader = (
        props.triangle.length > 0 ?
            <section className='geometricHeader'>
            <img src={FolderIcon} alt="icone de pasta"/> Triângulo
            </section>
        : null
     )
    return (
        <div>
            <dl>
                {geometricHeader}
                    <dd>
                            {squareHeader}
                        <section className='geometricContent'>
                            {square}
                        </section>
                            {triangleHeader}
                        <section className='geometricContent'>
                            {triangle}
                        </section>
                    </dd>
            </dl>
        </div>
    )
}