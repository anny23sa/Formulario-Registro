import React from 'react'
import { useState } from 'react';
import './Formulario.css'

const Formulario = () => {

const [name, setName] = useState("");
const [error, setError] = useState(false)

const handleSubmit =(e)=> {
  e.preventDefault()
  if(name.trim()===""){
  setError(true)
}else {
  alert('datos enviados')
  setError(false)
}
}

  return (
    <div className="container">
        <h2>Dime tu nombre</h2>
        {error ? <p className="error">Hay un error</p>: null}
        <form onSubmit={handleSubmit}>
            <div className="w-50">
                <label className="form-label">Agrega tu nombre</label>
                <input className="form-control" 
                type="text" 
                value={name} 
                onChange={ e => setName(e.target.value)} />
            </div>
            <button className="btn btn-primary mt-4 w-50">Registrarse</button>
        </form>
    </div>
  );
}

export default Formulario

/*import React from 'react'

const Formulario = () => {
  return (
    <div>Formulario</div>
  )
}

export default Formulario */