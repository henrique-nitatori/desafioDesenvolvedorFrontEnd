import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';


import Form, { FormasGeometricas } from '../components/Form'
import Button from '../components/Button'
import FormReader from '../components/FormRender'
import List from '../components/List'
import '../styles/pages/Main.css'




export default function Main() {

    const [open, setOpen] = useState(false);
    const [formas, setFormas] = useState<FormasGeometricas>();
    const [formaRender, setFormRender] = useState<FormasGeometricas>();

    function handleOpen() {
        setOpen(true)
    }
    function handleClose() {
        setOpen(false)

    }
    function handleAddFormas(forma: FormasGeometricas) {
        setFormas(forma);
    }
    function handleDragOver(e: React.DragEvent<HTMLElement>) {
        e.preventDefault()
    }
    function handleDragDrop(e: React.DragEvent<HTMLElement>) {
        const { forma,tamanho, cor, nome } = JSON.parse(e.dataTransfer.getData("forma"));
        setFormRender({
            nome,
            forma,
            tamanho,
            cor
        })
    }
  return (
      
      <div id="main">
          <div className="div-button">
              <section className="">
                <Button buttonText="Criar forma" onClick={handleOpen}/>
                
                <Modal
                className="modal"     
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                   <div >
                        <Form handleCreate={handleAddFormas}/>
                   </div>
                </Modal>
      
              </section>
          </div>
          <div className="container">
            <section className="list">
                <List formasGeometricas={formas}/>
            </section>
            <section 
            className="section-creator" 
            onDragOver={e => handleDragOver(e)}
            onDrop={e => handleDragDrop(e)}>
                <FormReader forma={ formaRender }/>
            </section>
          </div>
      </div>
  );
}

