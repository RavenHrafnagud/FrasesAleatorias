import {useAleatorio} from './useAleatorio'

export const useIntervalo = () => {
    const {cita,autor,link}=useAleatorio();
    setInterval(function(){
        
        document.getElementById("text").innerText=cita;
        document.getElementById("author").innerText=autor;
        document.getElementById("tweet-quote").setAttribute("href",link);
    },10000,"JavaScript");
}