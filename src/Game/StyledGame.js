import styled,{keyframes} from "styled-components";

//Animations

export const movePipe = keyframes`
from{
    left:100%;
}
to{
    left:-4%;
}`;

export const MarioJump = keyframes`
0%{
    bottom:2%;
}
40%{
    bottom: 15vh;
}
60%{
    bottom: 15vh;
}
100%{
    bottom: 2%;
}`;

export const moveClouds = keyframes`
from{
    left:100%;
}
to{
    left:-10%;
}` ;

//Styles

export const Display = styled.div`
width:90vw;
height:60vh;
border: 2px solid black;
background-color:lightblue;
position:relative;
overflow:hidden;`;

export const Durt = styled.div`
width:100%;
background-color:green;
height:2%;
position:absolute;
bottom:0%;`;

export const Pipe = styled.img`
widht:8vw;
height:10vh;
position:absolute;
bottom:2%;
animation:${movePipe} 3s linear infinite;`;

export const Mario = styled.img`
width:6rem;
height:6rem;
position:absolute;
bottom:2%;
animation: ${MarioJump} 0.5s ease-out infinite;`;

export const Clouds = styled.img`
width:8rem;
height:6rem;
margin-right:2rem;
position:absolute;
bottom:60%;
animation:${moveClouds} 2s linear infinite`;

export const Fundo = styled.section`
background-color:#213244;
width:100%;
height:100vh;
color:white;
display:flex;
flex-direction:column;
align-items:Center;`
