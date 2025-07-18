import styled from 'styled-components';

export const Container = styled.div `
    
    background-color: #f6f6f6;
   color: #1c4c32;
    display:flex;
    flex-direction: column;
    align-items: center;
`

export const Header = styled.div `
    color: #f6f6f6;
    margin: 5px 0 30px 0;
    width: 97%;
    height: 115px;
    background-color: #407c54;
    box-shadow: inset 0 0 0 5px #1c4c32;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-radius: 5px;
}
`

export const Main = styled.div `
    border-radius: 10px;
    width: 1000px;
    height: 100vh;
    background-color: #407c54;
    color: #f6f6f6;

    box-shadow: inset 0 0 0 5px #1c4c32;
    padding: 30px;

    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const Paragrafo  = styled.div `
    margin: 8px 10px 25px 10px;
    color #000000;
`
export const Footer = styled.div `
    width: 100%;
    height: 20vh;
    background-color: #1c4c32;
    color: #f6f6f6;
    display:flex;
    justify-content: space-around;
    align-items:center;
`

