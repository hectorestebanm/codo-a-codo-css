const nombre = document.querySelector(".form__nombre");
const apellido = document.querySelector(".form__apellido");
const email = document.querySelector(".form__email");
const nombreError = document.querySelector(".form__nombre__error");
const apellidoError = document.querySelector(".form__apellido__error");
const emailError = document.querySelector(".form__email__error");
const cantidad = document.querySelector(".form__cantidad__input");
const categoria = document.querySelector(".form__categoria__select");
const pagar = document.querySelector(".total__pagar");
const borrar = document.querySelector(".form__btn__borrar");
const resumen = document.querySelector(".form__btn__resumen");

const ticket = 200;
const descEstudiante = 0.8;
const descTrainee = 0.5;
const descJunior = 0.15;

// const total 

borrar.addEventListener("click", ()=>
{
    nombre.value = "";
    nombreError.style.display = "none";
    apellido.value = "";
    apellidoError.style.display = "none";
    email.value = "";
    emailError.style.display = "none";
    cantidad.value = "";
    pagar.textContent = "El valor es: $";
    alert("Se borrará el contenido de todos los campos ingresados");
});

resumen.addEventListener("click", (e)=>
{
    e.preventDefault();
    if(nombre.value === "")
    {
        nombreError.style.display = "block";
    }
    else
    {
        nombreError.style.display = "none";
    }
    if(apellido.value === "")
    {
        apellidoError.style.display = "block";
    }
    else
    {
        apellidoError.style.display = "none";
    }
    if(!email.value.includes("@"))
    {
        emailError.style.display = "block";
    }
    else
    {
        emailError.style.display = "none";
    }
    switch(categoria.value)
    {
        case "Estudiante":
            total = cantidad.value * ticket - cantidad.value * ticket * descEstudiante;
            pagar.textContent = `El valor es: $${total}`;
            alert("Elegiste categoria Estudiante");
            break;
        case "Trainee":
            total = cantidad.value * ticket - cantidad.value * ticket * descTrainee;
            pagar.textContent = `El valor es: $${total}`;
            alert("Elegiste categoria Trainee");
            break;
        case "Junior":
            total = cantidad.value * ticket - cantidad.value * ticket * descJunior;
            pagar.textContent = `El valor es: $${total}`;
            alert("Elegiste categoria Junior");
            break;
        default:
            pagar.textContent = "El valor es: $";
            alert("No elegiste Categoria");
    }
    if(nombre.value !== "" && apellido.value !== "" && email.value !== "")
    {
        alert("Los campos de información fueron ingresados correctamente");
    }

});
