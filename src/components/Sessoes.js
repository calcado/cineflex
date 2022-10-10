import axios from 'axios'
import {useState , useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'


export default function Sessoes({session, setSession,titulo, setTitulo}){
  const { idFilme } = useParams();

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`;
    const requisicao = axios.get(URL);
    requisicao.then((resposta) => setSession(resposta.data));

    requisicao.catch((erro) => {
      console.log(erro.response.data);
    });
  }, []);
  if (session.days === undefined) {
    return <p>carregando</p>;
  }

  return (
    <>
      <SessionPage>
        <Selecione>Selecione o horário</Selecione>
        <SessionLayout>
          {session.days.map((sessao) => (
            <SessaoId key={sessao.id}>
              <Day>
                {sessao.weekday} - {sessao.date}
              </Day>
              <Hours>
              {sessao.showtimes.map((hora) => <Link to={`/assentos/${hora.id}`} key={hora.id} ><Hour> {hora.name}</Hour></Link>)}
              </Hours>
            </SessaoId>
          ))}
        </SessionLayout>
      </SessionPage>
      <Footer>
        <Img src={session.posterURL} alt={titulo} />
        <Titulo>{session.title}</Titulo>
      </Footer>
    </>
  );
}

const SessionPage = styled.div`
background-color: #FFFFFF;
overflow-y: auto;
/* width: 100%;
height: 100%;
margin-bottom: 117px; */
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
background-color: #DFE6ED;
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
const Hours = styled.div`
display: flex;
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
const SessaoId = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: initial;
margin-bottom: 23px;
`