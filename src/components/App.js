import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import react, { useState, useEffect } from 'react'
import GlobalStyle from '../GlobalStyle'
import Navbar from './Navbar.js'
import PaginaPrincipal from './PaginaPrincipal.js'
import Assentos from "./Assentos.js"
import Sessoes from "./Sessoes.js"
import Sucesso from "./Sucesso.js"


export default function App() {
   const [idFilme, setIdFilme] = useState(0);
   const [titulo, setTitulo]=useState([])
   const [session, setSession]= useState({});
   const [seat, setSeat] = useState({});
   
   

//    useEffect(() => {
//       const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
//       const requisicao = axios.get(URL);
//       requisicao.then((resposta) => setFilme(resposta.data))
//       requisicao.catch((erro) => console.log(erro.response.data))
      
      
//   },[])
   
   return (
      
         <BrowserRouter>
            <GlobalStyle />
            <Main>
               <Navbar />
               <Routes>
                  <Route path="/" element={<PaginaPrincipal
                  
                   idFilme={idFilme} setIdFilme={setIdFilme} 
                   titulo={titulo} setTitulo={setTitulo}/>} 
                   />
                  <Route path={"/sessoes/:idFilme"} element={<Sessoes
                   
                   session={session} setSession={setSession}
                   idFilme={idFilme} setIdFilme={setIdFilme}
                   titulo={titulo} setTitulo={setTitulo}/>} 
                   />
                  <Route path="/assentos/:idSessao" element={<Assentos
                  
                  session={session} setSession={setSession}
                  seat={seat} setSeat={setSeat} 
                  titulo={titulo} setTitulo={setTitulo}/>} 
                  />
                  <Route path="/sucesso" element={<Sucesso
                  
                  idFilme={idFilme} setIdFilme={setIdFilme}
                  seat={seat} setSeat={setSeat} 
                  titulo={titulo} setTitulo={setTitulo}/>} 
                  />
               </Routes>

            </Main>
         </BrowserRouter>
     
   )
}

const Main = styled.main`
width: 375px;
height: 877px;
margin: 0 auto; 
`
