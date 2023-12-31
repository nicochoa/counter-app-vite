import { PropTypes } from "prop-types";


// usando funcion para pintar en el h1 
// const user = () => {
//     return 'Nicolas'
// }

// prueba para retornar objetos y se muestra como solo se puede especificando el key
// const newMessage = {
//     message: 'Hola mundo',
//     title: 'Fernando',
// };

export const FirstApp = ( { title, subTitle } ) => {
    // console.log(props);
    return (
        <>
            <h1> { title }</h1>
            {/* <code>{ JSON.stringify(newMessage) }</code> */}
            <p> { subTitle }</p>
        </>
    )
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}
FirstApp.defaultProps = {
    name: 'Nicolas Ochoa,',
    subTitle: 'No hay subtitulo',
    title: 'No hay titulo',
}
