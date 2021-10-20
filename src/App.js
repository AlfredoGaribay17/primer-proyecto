//import logo from './logo.svg';
//import './App.css';
//import React, {Fragment} from 'react'
import "./styles/style.scss"
import Curso from './Curso'
import Banner from './Banner'
import Formulario from "./Formulario"

const cursos = [
  {
    "nombre": "Rutinas",
    "image":"https://media.istockphoto.com/photos/adult-woman-training-legs-doing-inverted-lunges-exercise-picture-id1141568835?b=1&k=20&m=1141568835&s=170667a&w=0&h=sRiFJpICOIZpSiPWF9IYOjL23VFgafGLwLci676L8LI=",
    "price":"ir",
    "profesor":  "Quema calorias en casa"
  },
  {
    "nombre": "Alimentacion",
    "image":"https://media.istockphoto.com/photos/health-food-for-fitness-picture-id855098134?b=1&k=20&m=855098134&s=170667a&w=0&h=pT4TsJ_EsyztQYIEghJIlN_HXdu6NnAtfQmYDhELqz8=",
    "price":"ir",
    "profesor": "Ejercicio con Alimencion"
  },
  {
    "nombre": "Accesorios",
    "image":"https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478__340.jpg",
    "price":"ir",
    "profesor":  "Crece tu rendimiento"
  },
  {
    "nombre": "Nuesta Historia",
    "image":"https://cdn.pixabay.com/photo/2013/03/09/14/38/machines-91849__340.jpg",
    "price": "Ir",
    "profesor":  " Conoce mas de nosotros "
    
  },
  {
    
     "nombre": "Ubicaciones",
      "image":"https://cdn.pixabay.com/photo/2017/01/16/20/22/bubbles-1985150__340.png",
      "price": "Ir",
      "profesor":  "Mas cerca de ti "
   
 }

]
const App = () => (
<>
<Banner/>
<div className="ed-grid m-grid-2">
{
  cursos.map(c=><Curso nombre={c.nombre} image={c.image} price={c.price} profesor={c.profesor}/>)
}
<Curso/>
</div>
<Formulario/>


</>

)
export default App;
