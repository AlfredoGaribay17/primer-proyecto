import React from "react";
import PropTypes from 'prop-types';
//const persona = {"nombre":"Alfredo","apellido":"Garibay"}
//const curso = {"nombre":"Reach desde cero","price":"$1200mxn","image":"https://vistapointe.net/images/mix-wallpaper-16.jpg"}

const Curso = ({nombre, image,price,profesor}) => (
    <>
        <article class="card">
            <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src={image} alt=""/>
            </div>
            <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 class="t5 s-mb-2 s-center">
                    {nombre}
                </h3>
                <div class="s-mb-2 s-main-center">
                    <div class="card__teacher s-cross-center">
                        <span class="small">{profesor}</span>
                    </div>
                </div>
                <div class="s-main-center">
                    <a class="button--ghost-alert button--tiny" href="www.curso.com">{price}</a>
                </div>
            </div>
        </article>

    </>
)
Curso.propTypes = {
    nombre: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    profesor: PropTypes.string
}
Curso.defaultProps = {
    nombre: "Proximamente",
    image: "https://media.istockphoto.com/photos/concept-of-business-strategy-and-action-plan-hand-putting-wooden-cube-picture-id1189750888?b=1&k=20&m=1189750888&s=170667a&w=0&h=UMT4c6sCg3s6RAq5AnzUo2mhLJNo_jbuGPjwc8ixSyQ=",
    profesor: "Trabajando en nueva seccion"
}
export default Curso;