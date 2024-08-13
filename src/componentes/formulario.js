import React, { useState } from "react";

function Formulario() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!username) {
      errors.username = "El nombre de usuario es obligatorio";
    }

    if (!password) {
      errors.password = "La contraseña es obligatoria";
    } else if (password.length < 6) {
      errors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Enviar el formulario si la validación es exitosa
      console.log("Formulario enviado con éxito:", { username, password });
    } else {
      console.log("Errores en el formulario:", errors);
    }
  };

  return (
    <section className="registro1">
    <section className="registro">
      <form onSubmit={handleSubmit}>
        <div className="rol">
          <h1>ELEGIR ROL</h1>
        </div>

        <div className="rol1">
          <h3>USUARIO</h3>
        </div>
        <div className="rol2">
          <h4>
            <input
              className="usuario"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ingrese su usuario"
              required
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </h4>
        </div>

        <div className="rol1">
          <h3>CONTRASEÑA</h3>
        </div>
        <div className="rol2">
          <h4>
            <input
              className="contraseña"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
              required
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </h4>
        </div>

        <div className="boton_b">
          <button className="boton" id="boton_iniciar" type="submit">
            Iniciar Sesion
          </button>
        </div>
      </form>
    </section>
    </section>
  );
}

export default Formulario;