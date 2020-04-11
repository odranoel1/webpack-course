import '../css/components.css';

export const saludar = (name) => {

    console.log('Creando etiqueta h1, en el HTML. as');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ name }`;

    document.body.append( h1 );
}