import React from 'react';
import {useAleatorio} from '../hooks/useAleatorio';
import {useEscribir} from '../hooks/useEscribir';
import {useIntervalo} from '../hooks/useIntervalo';

// import Frases from '../BsDatos/Bd.json';

function Main() {

    //funcional------------
    // function aleatorio(){
    //     var frase=[];
    //     frase[0]=(Frases.quotes[Math.floor(Math.random()*Frases.quotes.length)]);
    //     var cita=frase[0].quote;
    //     var autor=frase[0].author;
    //     var link=`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${autor}`;
    //     return{cita,autor,link};
    // };



    // var frase=[];
    // frase[0]=(Frases.quotes[Math.floor(Math.random()*Frases.quotes.length)])
    // var cita=frase[0].quote
    // var autor=frase[0].author
    // var link=`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${autor}`



  //  function escribir (){
        // frase[0]=(Frases.quotes[Math.floor(Math.random()*Frases.quotes.length)])
        // cita=frase[0].quote
        // autor=frase[0].author
        // link="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+autor

        // document.getElementById("text").innerText=cita
        // document.getElementById("author").innerText=autor
        // document.getElementById("tweet-quote").setAttribute("href",link)
        // console.log(cita,autor,link); 



        //funcional-----------
        // const {cita,autor,link}=useAleatorio();

        // document.getElementById("text").innerText=cita;
        // document.getElementById("author").innerText=autor;
        // document.getElementById("tweet-quote").setAttribute("href",link);
  //  };

    //funcional---------
    // setInterval(function(){
    //     const {cita,autor,link}=useAleatorio();
    //     document.getElementById("text").innerText=cita;
    //     document.getElementById("author").innerText=autor;
    //     document.getElementById("tweet-quote").setAttribute("href",link);
    // },10000,"JavaScript");


    useIntervalo();


    const {cita,autor,link}=useAleatorio();

  
    return (
        <main>
            <section id="quote-box">
                <div>
                    <i>"</i>
                    <span id="text">
                        {cita}
                    </span>
                </div>
                <div>
                    -
                    <span id="author">
                        {autor}
                    </span>
                </div>
                <div>
                    <a id="tweet-quote" href={link} title="Twitea esta cita" target="_blank" rel="noreferrer">
                        <i>Twitter</i>
                    </a>
                    <button id="new-quote" onClick={useEscribir}>Nueva Cita</button>
                </div>
            </section>
        </main>
    )
}

export default Main
