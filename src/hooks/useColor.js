export const useColor = () => {
    let colores = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
    ];

    // let color=colores[Math.floor(Math.random()*colores.length-1)]
    let color=colores[Math.floor(Math.random()*11)]

    return{color};
};