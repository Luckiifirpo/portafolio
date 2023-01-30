
export default function Validate(data){
   
   const email_reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/

   const {email, subject, message} = data;
   let errors = {};

   if(!email) {errors.email = "No puede ser un mensaje anónimo :)"}
    else if(!email_reg.test(email)) {errors.email = "Debe ser un email válido"}
   if(!subject) {errors.subject = "¿Sobre que quieres que hablemos?"}
   else if(subject.length > 50) {errors.subject = "El asunto no puede contener más de 50 caracteres"}
   if(!message) errors.message = "Por favor redacte un mensaje"

   return errors;
}