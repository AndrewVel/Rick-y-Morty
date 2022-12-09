export function validate(inputs) {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const errors = {};
  if (!inputs.user) {
    errors.user = "Se requiere un usuario";
  } else {
    if (!regexEmail.test(inputs.user)) {
      errors.user = "Debe ser un correo electrónico";
    } else {
      if (inputs.user.length > 35) {
        errors.user = "No puede tener mas de 35 Caracteres";
      }
    }
  }
  if (!inputs.pass) {
    errors.pass = "Se requiere una contraseña";
  } else {
    if (!inputs.pass.replace(/[^0-9]/g, "")) {
      errors.pass = "La contraseña debe tener por lo menos un numero";
    } else {
      if (inputs.pass.length < 6 || inputs.pass.length > 10) {
        errors.subject = "La contraseñ debe tener de 6 a 10 caracteres ";
      }
    }
  }
  return errors;
}
