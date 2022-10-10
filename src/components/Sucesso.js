import axios from 'axios'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function Sucesso() {
    return (
        <SucessPage>
            <SpanSucesso>Pedido feito com sucesso!</SpanSucesso>
            <Ingresso>
                <Filme>
                    <p>Filme e sessão</p>
                </Filme>
                <Lugares>
                    <p>Ingressos</p>
                </Lugares>
                <Info>
                    <p>Comprador</p>
                </Info>
            </Ingresso>
            <Voltar>Voltar pra Home</Voltar>
        </SucessPage>
    )


}

const SucessPage = styled.div`
background-color: #E5E5E5;
`

const SpanSucesso = styled.span`
width: 100%;
height: 110px;
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