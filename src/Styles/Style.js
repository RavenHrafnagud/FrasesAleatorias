import styled, {css} from 'styled-components';


export const Mainn=styled.main`
    position: relative;
    z-index: 2;
`

export const Section=styled.section`
    border-radius: 0.3rem;
    position: relative;
    width: 45rem;
    padding: 4rem 5rem;
    display: table;
    background-color:white;
`

export const Div=styled.div`
    ${props=>props.texto && css`
        text-align: center;
        width: 45rem;
        height: auto;
        clear: both;
        font-weight: 500;
        font-size: 3rem;
    `};

    ${props=>props.autor && css`
        width: 45rem;
        height: auto;
        clear: both;
        padding-top: 2rem;
        font-size: 1.5rem;
        text-align: right;
    `};

    ${props=>props.boton && css`
        width: 45rem;
        margin: auto;
        display: block;
    `};
`

export const I=styled.i`
    font-size: 2.6rem;
    margin-right:1rem;

`

export const A=styled.a`
    background-color: rgb(71, 46, 50);
    float: left;
    padding: 0rem;
    padding-top: 0.8rem;
    text-align: center;
    font-size: 2rem;
    margin-right: 0.5rem;
    height: 3.5rem;
    width: 4.5rem;
    border: none;
    border-radius: 0.3rem;
    color: white;
    outline: none;
    margin-top: 3rem;
    opacity: 1;
    cursor: pointer;
`

export const Button=styled.button`
    background-color: rgb(71, 46, 50);
    float: right;
    height: 3.8rem;
    border: none;
    border-radius: 0.3rem;
    color: white;
    outline: none;
    font-size: 1.5rem;
    padding: 0.8rem 1.8rem 0.6rem 1.8rem;
    margin-top: 3rem;
    opacity: 1;
    cursor: pointer;
`;
