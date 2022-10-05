import styled from 'styled-components'

export default function Navbar(){
    return(
        <Logo><p>CINEFLEX</p></Logo>
    )
}

const Logo = styled.h1`
width: 100%;
height: 67px;
background-color: #C3CFD9;
p{
font-family:'Roboto', 'sans-serif';
font-size: 34px;
font-weight: 400;
color: #E8833A;
}`;
