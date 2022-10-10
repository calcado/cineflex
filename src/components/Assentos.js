import axios from 'axios'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom';
import Assento from "./Assento.js"
import { useNavigate } from 'react-router-dom';

export default function Assentos({seat, setSeat, titulo, form, setForm, nameAssento,setNameAssento}) {
    const {idSessao} = useParams()
    const [selecionados, setSelecionados]= useState([])
    const navigate = useNavigate()

    function handleForm(e) { 
      setForm({ ...form,[e.target.name]: e.target.value });
   
    } 

    useEffect(() => {
        
        const URL =  `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`;
        const requisicao = axios.get(URL);
        requisicao.then((resposta) => setSeat(resposta.data));
        requisicao.catch((erro) => console.log(erro.response.data));
        }, []);
      
    if (seat.seats === undefined) {
      return <p>carregando</p>;
    }
    
    function pedir(e){
        e.preventDefault();
        const dados = {...form, ids:selecionados} 
        console.log(dados)
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"
        const requisicao = axios.post(URL, dados)
        requisicao.then((response) => {
          console.log(response.data)
          navigate("/sucesso")
        })
        
        requisicao.catch((response)=>console.log(response.data))
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
                form={form}
                setForm={setForm}
                nameAssento={nameAssento}
                setNameAssento={setNameAssento} 
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
          <Info onSubmit={pedir}>
            <p>Nome do comprador:</p>
            <input name="name" onChange={handleForm} value={form.name} type="text" placeholder="Digite seu nome..." />
            
            <p>CPF do comprador:</p>
            <input name="cpf" onChange={handleForm} value={form.cpf} type="text" placeholder="Digite seu CPF..." />
            <Reservar type="submit">Reservar assento(s)</Reservar>
          </Info>
        </SeatsPage>
        <Footer>
          <Img src={seat.movie.posterURL} alt={seat.movie.title} />
          <Titulo>{seat.movie.title}<br/>{seat.day.weekday}-{seat.name}</Titulo>
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
margin-bottom: 41px;
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
  margin-bottom: 20px;
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
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
margin-top: 57px;
margin-bottom: 30px;
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