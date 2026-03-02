// Boton.jsx
function Boton({ texto, tipo }) {
  return (
    <button className={`boton ${tipo || ''}`}>
      {texto}
    </button>
  )
}

export default Boton