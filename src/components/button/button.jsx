import React from 'react'

import  './button.css'

export default props => (

    <div className='buttonContent'>    
        <button onClick={props.action}><b>{props.text}</b></button>
    </div>

)
