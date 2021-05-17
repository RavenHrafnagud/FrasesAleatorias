import Frases from '../BsDatos/Bd.json';

export const useAleatorio = () => {

    var frase=[];
    frase[0]=(Frases.quotes[Math.floor(Math.random()*Frases.quotes.length)]);
    var cita=frase[0].quote;
    var autor=frase[0].author;
    var link=`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${autor}`;

    return{cita,autor,link};
}
