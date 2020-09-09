import React from 'react'

import './card.css'

export default props => {
    const cardStyle = {
        backgroundColor: props.color || '#FFFF',
        height: props.height || '400px',
        width: props.width || '400px'
        
    }

    return (
        <div className='card' style={cardStyle} >
            <div className="title"><h4>{props.titulo}</h4></div>
            <div className="content">{props.children}</div>
        </div>
    )
}



