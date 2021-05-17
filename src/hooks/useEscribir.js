import {useAleatorio} from './useAleatorio'

export const useEscribir = () => {
    const {cita,autor,link}=useAleatorio();

    document.getElementById("text").innerText=cita;
    document.getElementById("author").innerText=autor;
    document.getElementById("tweet-quote").setAttribute("href",link);
}