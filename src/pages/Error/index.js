import React from 'react';
import { Link } from 'react-router-dom';
import error404 from '../../assets/img/error404.png';
import styled from 'styled-components';
//import PageDefault from '../../components/PagesDefault';

const Img = styled.img`
width: 100%;
max-width: 300px;
display: flex;
justify-content: center;
align-items: center;
position: center; 
@media (max-width: 850px) {
  padding-top: 100px;}
}`

function Page404() {
    return (
        <div>
            <center>
            <Img src={error404} alt="Hamburguer triste"/>
            <h1>Ooops! Acho que a página que você procura não existe.</h1>
            <Link to="/">
                Ir para home
                 </Link>
            </center>
        </div>
    )
}
export default Page404