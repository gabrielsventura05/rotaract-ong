'use client'
import styled from 'styled-components';
import * as React from 'react';
import Image from "next/image";
import dynamic from 'next/dynamic';

const Container = styled.div `


    


`;

const Formulario = styled.form`
background-color: gray;
margin-left: 20%;

width: 40%;

align-items: center;
margin-left: 30.5%;
padding: 10px 25px;


`;

export default function Form() {
return (
    <Container>
        <Formulario  action="">
        <label htmlFor="">
            nome
        </label><br />
        <input type="text" name="nome" placeholder='nome'/>

        </Formulario>
    </Container>
);


}