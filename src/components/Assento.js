import { Form } from "react-router-dom";
import styled from "styled-components";


export default function Assento({name, id, disponivel,selecionados, setSelecionados,form,setForm, nameAssento, setNameAssento}){

    function selecionarAssento(id,name){
      
        if( selecionados.includes(id)){
            const arr = selecionados.filter((p) => {return p!==id} )
            setSelecionados(arr)
            const names = nameAssento.filter((n) => {return n!==name} )
            setNameAssento(names)
        }else{

            setSelecionados([...selecionados, id])
            setNameAssento([...nameAssento, name])
            
        }

        
    }
   

    return disponivel === true ? (
      name < 10 ? (
        <AssentoDisponivel onClick={()=> selecionarAssento(id, name)} selecionado={selecionados.includes(id)}>
          <p>0{name}</p>
        </AssentoDisponivel>
      ) : (
        <AssentoDisponivel onClick={()=> selecionarAssento(id, name )} selecionado={selecionados.includes(id)}>
          <p>{name}</p>
        </AssentoDisponivel>
      )
    ) : name < 10 ? (
      <AssentoIndisponivel onClick={() => alert("Este assento não está disponível")}>
        <p>0{name}</p>
      </AssentoIndisponivel>
    ) : (
      <AssentoIndisponivel onClick={() => alert("Este assento não está disponível")}>
        <p>{name}</p>
      </AssentoIndisponivel>
    );
    
}
const Cadeira = styled.li`
background-color: #C3CFD9;
height: 26px;
width: 26px;
border-radius: 12px;
border: 1px solid #808F9D;
display: flex;
justify-content: center;
align-items: center;
p{

font-family: 'Roboto', sans-serif;
font-size: 11px;
font-weight: 400;
}
`

const AssentoDisponivel= styled.span`
width: 26px;
height: 26px;
border-radius: 17px;
border: 1px solid #0E7D71;
background-color:${props => props.selecionado ? "#1AAE9E" : "#C3CFD9"};
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
p{

font-family: 'Roboto', sans-serif;
font-size: 11px;
font-weight: 400;
}
`
const AssentoIndisponivel = styled.span`
width: 26px;
height: 26px;
border-radius: 17px;
border: 1px solid #0E7D71;
background-color: #FBE192;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
p{

font-family: 'Roboto', sans-serif;
font-size: 11px;
font-weight: 400;
}
`