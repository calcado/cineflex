import axios from 'axios'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom';
import Assento from "./Assento.js"

export default function Assentos({seat, setSeat}) {
    const {idSessao} = useParams()
    const [selecionados, setSelecionados]= useState([])
    useEffect(() => {
        
        const URL =  `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`;
        const requisicao = axios.get(URL);
        requisicao.then((resposta) => setSeat(resposta.data));
        requisicao.catch((erro) => console.log(erro.response.data));
        }, []);
      console.log(seat)
    if (seat.seats === undefined) {
        return <p>carregando</p>;
      }
    
    return (
      <>
        <SeatsPage>
          <Selecione>Selecione o(s) assento(s)</Selecione>
          <Cadeiras>
            {seat.seats.map((assento) => (
              <Assento
                key={assento.id}
                name={assento.name}
                id={assento.id}
                disponivel={assento.isAvailable}
                selecionados={selecionados}
                setSelecionados={setSelecionados}
              />
            ))}
          </Cadeiras>
          <Status>
            <DivStatus>
              <BolaSelecionado />
              Selecionado
            </DivStatus>
            <DivStatus>
              <BolaDisponivel />
              Disponível
            </DivStatus>
            <DivStatus>
              <BolaIndisponivel />
              Indisponível
            </DivStatus>
          </Status>
          <Info>
            <p>Nome do comprador:</p>
            <input type="text" placeholder="Digite seu nome..." />
            <p>CPF do comprador:</p>
            <input type="text" placeholder="Digite seu CPF..." />
            <Reservar type="submit">Reservar assento(s)</Reservar>
          </Info>
        </SeatsPage>
        <Footer>
          <Img src="" alt="" />
          <Titulo>Titulo Filme</Titulo>
        </Footer>
      </>
    );

}

const Selecione = styled.span`
display: flex;
justify-content: center;
align-items: center;
font-family: 'Roboto', sans-serif;
font-size: 24px;
font-weight: 400;
height: 110px;
width: 100%;
color: #293845;
`

const SeatsPage = styled.div`
background-color: #FFFFFF;
`
const Cadeiras =styled.ul`
display: grid;
grid-template-columns: 26px 26px 26px 26px 26px 26px 26px 26px 26px 26px;
grid-column-gap : 7px;
grid-row-gap: 18px;

justify-content: space-between;
align-items: center;
margin-bottom: 10px;
`

const Status = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const DivStatus = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const BolaSelecionado = styled.span`
width: 26px;
height: 26px;
border-radius: 17px;
border: 1px solid #0E7D71;
background-color: #1AAE9E;
`
const BolaDisponivel= styled.span`
width: 26px;
height: 26px;
border-radius: 17px;
border: 1px solid #0E7D71;
background-color: #C3CFD9;
`
const BolaIndisponivel = styled.span`
width: 26px;
height: 26px;
border-radius: 17px;
border: 1px solid #0E7D71;
background-color: #FBE192;
`

const Info = styled.form`
p{
font-family: 'Roboto', sans-serif;
font-size: 18px;
font-weight: 400;
height: 25px;
width: 327px;
}
input{
  height: 51px;
  width: 327px;
}
`
const Reservar = styled.button`
width: 225px;
height: 42px;
background-color: #E8833A;
color: #FFFFFF;
font-family: 'Roboto', sans-serif;
font-size: 18px;
font-weight: 400;
`

const Footer = styled.div`
background-color: #9EADBA;
display: flex;
align-items: center;
`
const Img = styled.img`
width: 48px;
height: 72px;
`
const Titulo = styled.span`
font-family: 'Roboto', sans-serif;
font-size: 26px;
font-weight: 400;
color: #293845;
margin-left: 22px;
`