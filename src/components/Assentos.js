import axios from 'axios'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function Assentos() {
    return (
        <>
            <SeatsPage>
                <Selecione>Selecione o(s) assento(s)</Selecione>
                <Cadeiras>Cadeiras</Cadeiras>
                    <Status>
                        <DivStatus>
                        <BolaSelecionado />
                        Selecionado
                        </DivStatus>
                        <DivStatus>
                        <BolaDisponivel/>
                        Disponível
                        </DivStatus>
                        <DivStatus>
                        <BolaIndisponivel/>
                        Indisponível
                        </DivStatus>
                    </Status>
                <Info>
                    <p>Nome do comprador:</p>   
                    <input type="text" placeholder="Digite seu nome..."/> 
                    <p>CPF do comprador:</p>
                    <input type="text" placeholder='Digite seu CPF...'/>
                </Info>
                <Reservar>Reservar assento(s)</Reservar>
            </SeatsPage>
            <Footer>
                <Img src="" alt="" />
                <Titulo>Titulo Filme</Titulo>

            </Footer>
        </>
    )

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
background-color: #E5E5E5;
`

const Cadeiras = styled.ul`
background-color: #C3CFD9;
height: 26px;
width: 26px;
border-radius: 12px;
border: 1px solid #808F9D;
`
const Status = styled.div`
display: flex;
`
const DivStatus = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const BolaSelecionado = styled.span`
width: 25px;
height: 25px;
border-radius: 17px;
border: 1px solid #0E7D71;
background-color: #1AAE9E;
`
const BolaDisponivel= styled.span`
width: 25px;
height: 25px;
border-radius: 17px;
border: 1px solid #0E7D71;
background-color: #C3CFD9;
`
const BolaIndisponivel = styled.span`
width: 25px;
height: 25px;
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