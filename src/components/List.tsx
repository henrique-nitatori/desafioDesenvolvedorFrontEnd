import React, { useState, useEffect } from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { FormasGeometricas } from './Form';

interface IList {
  formasGeometricas?: FormasGeometricas
}


export default function List({formasGeometricas} : IList) {
  const [quadrados, setQuadrados] = useState<FormasGeometricas[]>([])
  const [triangulos, setTriangulos] = useState<FormasGeometricas[]>([])
  
  useEffect(() => {
    if(formasGeometricas) {
      formasGeometricas.forma === 'quadrado' ? setQuadrados([...quadrados, formasGeometricas]) : setTriangulos([...triangulos, formasGeometricas])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formasGeometricas])

  function handleDragStart(e: React.DragEvent<HTMLLIElement>, forma: FormasGeometricas) {
    const el = JSON.stringify(forma)
    e.dataTransfer.setData('forma', el)
  }


  return (
        <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}>
            <TreeItem nodeId="1" label="Quadrado" >
              {quadrados.map((quadrado, index) => (
                <TreeItem key={index} nodeId={quadrado.nome} label={quadrado.nome} draggable onDragStart={e => handleDragStart(e, quadrado)}/>
              ))}
        </TreeItem>
        <TreeItem nodeId="4" label="Triângulo">
        {triangulos.map((triangulo, index) => (
                <TreeItem key={index} nodeId={triangulo.nome} label={triangulo.nome} draggable onDragStart={e => handleDragStart(e, triangulo)}/>
              ))}
        </TreeItem>
    </TreeView>
  );
}
