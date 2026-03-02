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
      {/* etc */}
    </div>
  )
}

export default Botones