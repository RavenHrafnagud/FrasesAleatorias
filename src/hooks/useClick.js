import { useColor } from './useColor';
import {useEscribir} from './useEscribir';

export const useClick = () => {
    useEscribir();
    const {color}=useColor();   
    let dibujar=color;
    document.body.style.backgroundColor=dibujar;
    document.body.style.color=dibujar;
}