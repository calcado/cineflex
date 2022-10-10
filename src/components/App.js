import styled from 'styled-components'
import react from 'react'
import GlobalStyle from '../GlobalStyle'
import Navbar from './Navbar.js'
import PaginaPrincipal from './PaginaPrincipal.js'
import Assentos from "./Assentos.js"
import Sessoes from "./Sessoes"
import Sucesso from "./Sucesso"


export default function App(){
   return( 
    <>
{/* <BrowserRouter> */}        
<GlobalStyle/>
<Main>
<Navbar/>
<PaginaPrincipal/>

{/* <Routes/>
<Route path="/" element={<PaginaPrincipal/>}/>
<Route path="/sessoes/:idFilme" element={<Sessoes/>}/>
<Route path="/assentos/:idSessao" element={<Assentos/>}/>
<Route path="/sucesso" element={<Sucesso/>}/>
 */}
 
 </Main>
{/* </BrowserRouter> */}
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