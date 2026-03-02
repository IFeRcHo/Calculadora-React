// Botones.jsx
import Boton from './Boton'

function Botones() {
  return (
    <div className="contenedor_botones">
      <Boton texto="C" tipo="operador" />
      <Boton texto="/" tipo="operador" />
      <Boton texto="%" tipo="operador" />
      <Boton texto="-" tipo="operador" />

      <Boton texto="7" />
      <Boton texto="8" />
      <Boton texto="9" />
      <Boton texto="*" tipo="operador" />
      
      <Boton texto="4"/>
      <Boton texto="5"/>
      <Boton texto="6"/>

      <Boton texto="1"/>
      <Boton texto="2"/>
      <Boton texto="3"/>

      <Boton texto="+" tipo="operador" />
      <Boton texto="." tipo="operador" />
      <Boton texto="0" tipo="operador" />
      <Boton texto="=" tipo="operador" />



    </div>
  )
}

export default Botones