import styled from 'styled-components'
import { Link,  } from 'react-router-dom'

export default function Sucesso({filme, titulo, idSession,form,setForm, seat,setSeat, nameAssento,setNameAssento}) {
    function zerar(){
        setForm({ids:"", name:"" , cpf:""})
        setNameAssento([])
        setSeat([])
    }
    
    
    return (
        <SucessPage>
            <SpanSucesso>Pedido feito com sucesso!</SpanSucesso>
            <Ingresso>
                <Filme>
                    <Categoria>Filme e sessão</Categoria>
                    <Paragrafo>{seat.movie.title}</Paragrafo>
                    <Paragrafo>{seat.day.date} - {seat.name}</Paragrafo>
                </Filme>
                <Lugares>
                    <Categoria>Ingressos</Categoria>
                    {nameAssento.map((assento) => <Paragrafo>Assento {assento}</Paragrafo>)}
                </Lugares>
                <Info>
                    <Categoria>Comprador</Categoria>
                    <Paragrafo>Nome: {form.name} </Paragrafo>
                    <Paragrafo>Cpf: {form.cpf}</Paragrafo>
                </Info>
            </Ingresso>
            <Link to="/"><Voltar onClick={zerar}>Voltar pra Home</Voltar></Link>
        </SucessPage>
    )


}

const SucessPage = styled.div`
background-color: #FFFFFF;
`

const SpanSucesso = styled.span`
width: 100%;
height: 110px;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Roboto', sans-serif;
font-weight: 700;
font-size: 24px;
color:#247A6B;

`

const Ingresso = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`

const Filme = styled.div`
width: 100%;
height: 110px;
p{
 font-family:'Roboto',sans-serif ;
 font-weight: 700;
 font-size: 24px;
}
`
const Lugares = styled.div`
width: 100%;
height: 110px;
p{
 font-family:'Roboto',sans-serif ;
 font-weight: 700;
 font-size: 24px;
}
`
const Info = styled.div`
width: 100%;
height: 110px;
p{
 font-family:'Roboto',sans-serif ;
 font-weight: 700;
 font-size: 24px;
}
`

const Voltar = styled.button`
width: 225px;
height: 42px;
background-color:#E8833A;
color: #FFFFFF;
border-radius: 3px;
font-family:'Roboto',sans-serif ;
font-weight: 400;
font-size: 18px;
`

const Categoria = styled.p`

`
const Paragrafo = styled.p`


`