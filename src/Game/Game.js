import React from "react";
import * as S from './StyledGame';
import Pipe from '../Assets/pipe.png';
import Mario from '../Assets/mario.gif';
import Clouds from '../Assets/clouds.png';

export default function Game(){

  return(
    <S.Fundo>
        <h1>Super Mario da Shoppe</h1>
        <S.Display>
            <S.Clouds src={Clouds} alt='Clouds'></S.Clouds>
            <S.Pipe src={Pipe} alt='pipe'/>
            <S.Mario src={Mario} alt='mario'/>
            <S.Durt></S.Durt>
        </S.Display>
    </S.Fundo>
  )
}