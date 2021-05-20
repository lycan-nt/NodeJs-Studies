// Declaraçãoa de função (Function hoisting)
falarOi();

function falarOi()
{
    console.log('Oie');
}
falarOi();

//First Class Object (Objeto de primeira classe)
// Function Expression
const souUmDado = function() {
    console.log("Sou um dado");
}
souUmDado();

//Arrow Function
const funcaoArrow = () => {
    console.log("Sou uma arrow function");
}
funcaoArrow();

//Dentro de um objeto
const obj = {
    falar: function() {
        console.log("Estou falando...");
    }
}
obj.falar();