import axios from 'axios'
import {useState , useEffect} from 'react'
import styled from 'styled-components'

export default function Sessoes(){
    const [session, setSession]= useState([])
    
    useEffect(()=>{
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies/${filme.id}/showtimes"
        const requisicao = axios.get(URL)
        requisicao.then((resposta)=>setSession(resposta.data.days))
        requisicao.catch(erro=>{console.log(erro.response.data)})
    },[])

    return (
        <>
            <SessionPage>
                <Selecione>Selecione o horário</Selecione>
                <SessionLayout>
                    <Day>Dia da Semana - data</Day>
                    <Hour>Hora</Hour>
                </SessionLayout>
            </SessionPage>
            <Footer>
                <Img src="" alt="" />
                <Titulo>Titulo Filme</Titulo>

            </Footer>
        </>
    )



}

const SessionPage = styled.div`
background-color: #E5E5E5;

`
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
const SessionLayout = styled.ul`
display: flex;
flex-direction: column;
`

const Day = styled.span`
width: auto;
height: 35px;
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 20px;
color: #293845;
margin-bottom: 22px;
`

const Hour = styled.button`
background-color: #E8833A;
width: 83px;
height: 43px;
border-radius: 3px;
color: #FFFFFF;
font-family: 'Roboto',sans-serif;
font-weight: 400;
font-size: 18px;
margin-right: 9px;
`
