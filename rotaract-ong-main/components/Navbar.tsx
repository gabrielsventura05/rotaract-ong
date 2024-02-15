'use client'
import styled from 'styled-components';
import Link from "next/link";
import { link } from 'fs';


<template>
    <div id="nav">
        <h1>vai ter um menu aqui</h1>

    </div>
</template>

const Container = styled.div`

background-color: black ;
color: white;
padding-bottom: 5%;


`;



const LInkItem1 = styled(Link) `


color: blue;
margin-left: 5%;
font-size: 20px;

`;


const LInkItem2 = styled(Link) `

margin-left: 20%;
font-size: 20px;


`;

const LInkItem3 = styled(Link) `

margin-left: 50%;
color: green;
font-size: 20px;


`;

const LInkItem4 = styled(Link) `

margin-left: 4%;
color: green;
font-size: 20px;


`;



export default  function Navbar() {

    return (

        
<Container>
<LInkItem1 href={"#"}>ONG A</LInkItem1>
<LInkItem2 href="/">HOME</LInkItem2>
<LInkItem3 href={"#"}>USUARIO</LInkItem3>
<LInkItem4 href={"#"}>SAIR</LInkItem4>
</Container>

    );

}