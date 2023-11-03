const nombre = document.querySelector(".form__nombre");
const apellido = document.querySelector(".form__apellido");
const email = document.querySelector(".form__email");
const cantidad = document.querySelector(".form__cantidad__input");
const categoria = document.querySelector(".form__categoria__select");
const pagar = document.querySelector(".total__pagar");
const borrar = document.querySelector(".form__btn__borrar");
const resumen = document.querySelector(".form__btn__resumen");

const ticket = 200;
const descEstudiante = 0.8;
const desctrainee = 0.5;
const descJunior = 0.15;

// const total 

borrar.addEventListener("click", ()=>
{
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    cantidad.value = "";
    alert("Se borrará el contenido de todos los campos ingresados");
});

resumen.addEventListener("click", (e)=>
{
    e.preventDefault();
    switch(categoria.value)
    {
        case "Estudiante":
            pagar.textContent = `El valor es: ${ticket}`;
            alert("Elegiste categoria Estudiante");
            break;
        case "Trainee":
            pagar.textContent = `El valor es: ${ticket}`;
            alert("Elegiste categoria Trainee");
            break;
        case "Junior":
            pagar.textContent = `El valor es: ${ticket}`;
            alert("Elegiste categoria Junior");
            break;
        default:
            alert("No elegiste Categoria");
    }
});