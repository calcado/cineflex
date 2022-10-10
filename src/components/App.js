import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import react, { useState, useEffect } from 'react'
import GlobalStyle from '../GlobalStyle'
import Navbar from './Navbar.js'
import PaginaPrincipal from './PaginaPrincipal.js'
import Assentos from "./Assentos.js"
import Sessoes from "./Sessoes.js"
import Sucesso from "./Sucesso.js"



export default function App() {
   const params = useParams();
   const [filmes, setFilme] = useState([]);
   const [idFilme, setIdFilme] = useState([]);
   const [session, setSession]= useState([]);
   const [seats, setSeat] = useState([]);

   useEffect(() => {
      const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
      const requisicao = axios.get(URL);
      requisicao.then((resposta) => setFilme(resposta.data))
      requisicao.catch((erro) => console.log(erro.response.data))
  },[])
   
   return (
      <>
         <BrowserRouter>
            <GlobalStyle />
            <Main>
               <Navbar />
               <Routes>
                  <Route path="/" element={<PaginaPrincipal
                   filmes={filmes} setFilme={setFilme}
                   idFilme={idFilme} setIdFilme={setIdFilme} />} />
                  <Route path="/sessoes/:idFilme" element={<Sessoes
                   session={session} setSession={setSession}
                   idFilme={idFilme} setIdFilme={setIdFilme}/>} />
                  <Route path="/assentos/:idSessao" element={<Assentos
                  session={session} setSession={setSession}
                  seats={seats} setSeat={setSeat} />} />
                  <Route path="/sucesso" element={<Sucesso
                  idFilme={idFilme} setIdFilme={setIdFilme}
                  seats={seats} setSeat={setSeat} />} />
               </Routes>

            </Main>
         </BrowserRouter>
      </>
   )
}

const Main = styled.main`
width: 375px;
height: auto;
`

// <>
// {/* <BrowserRouter> */}        
// <GlobalStyle/>
// <Main>
// <Navbar/>
// <p>Teste</p>
// {/* <PaginaPrincipal/> */}
// {/* <Routes/>
// <Route path="/" element={<PaginaPrincipal/>}/>
// <Route path="/sessoes/:idFilme" element={<Sessoes/>}/>
// <Route path="/assentos/:idSessao" element={<Assentos/>}/>
// <Route path="/sucesso" element={<Sucesso/>}/>
//  */}
 
//  </Main>
// {/* </BrowserRouter> */}
// </>