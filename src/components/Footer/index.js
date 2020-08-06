
import React from 'react';
//import styled from 'styled-components';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { FooterBase } from './styles';


//import Logo from '../../assets/img/Logo.png';


export default function Footer() {
    return (
        <FooterBase>
            <div className="social">
                <a href="https://github.com/jessicatrindad" rel="noopener noreferrer" target="_blank"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/jessicatrindade" rel="noopener noreferrer" target="_blank"><FaLinkedinIn /></a>
                <a href="https://www.instagram.com/jessicalorranetr/" rel="noopener noreferrer" target="_blank"><FaInstagram /></a>
                <a href="https://www.alura.com.br/">
                </a><p>
                Orgulhosamente criado por Jessica Trindade durante a
                {''}
                <a href="https://www.alura.com.br/">
                Imersão React da Alura
                </a></p>
            </div>
        </FooterBase>
    );
}