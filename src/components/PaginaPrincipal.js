import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function PaginaPrincipal({filmes, setFilme, idFilme , setIdFilme}) {
    // const [filmes, setFilme] = useState([]);

    // useEffect(() => {
    //     const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
    //     const requisicao = axios.get(URL);
    //     requisicao.then((resposta) => setFilme(resposta.data))
    //     requisicao.catch((erro) => console.log(erro.response.data))
    // },[])

    return (
        <MainPage>
            <Selecione>Selecione o Filme</Selecione>
            <Lista>
            {filmes.map(filme => <li key={filme.id}><Cartaz  src={filme.posterURL} alt={filme.title}/></li>)}

            </Lista>
        </MainPage>
    )
}


const MainPage = styled.main`
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

const Lista = styled.ul`
height: auto;
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
margin-left: 33px;
margin-right: 33px;
`

const Cartaz = styled.img`
width: 129px;
height: 193px;
margin-right: 46px;
margin-bottom: 27px;
`