import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--color,black);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
  .social{
    margin-top: 4px;
    a{
        margin: 10px;
        transition: .2s;
        :hover{
            opacity: .5;
        }
    }
`;
