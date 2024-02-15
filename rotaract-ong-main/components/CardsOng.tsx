'use client'

import caixasData from '../public/caixas.json';
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import * as S from './styled';
import Link from 'next/link';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  height: theme.spacing(30),
  verticalAlign: 'middle',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexwrap: 'initial',
  display: 'flex',
  justify: 'center'
}));

export default function Card() {

  return (
    <Box margin={5}  display={'flex'}>
      <Grid container spacing={2}>
        {caixasData.map((caixas, index) => (
          <Grid  sm={6} md={2} lg={3} key={index}>
            <Link href={''} passHref>
              <Item>
                <S.ONGContent>
                 <S.ONGDescrition>
                  <p>{caixas.description}</p>
                  </S.ONGDescrition>
                </S.ONGContent>
              </Item>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
