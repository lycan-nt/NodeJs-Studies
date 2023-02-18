function soma (a,b)
{
    return a + b;
}

let s1 = soma(5,5);
console.log(s1);

function criarPessoa( nome, sobrenome )
{
    return { nome, sobrenome }
}
const p1 = criarPessoa('Felipe', 'D. Santos')
console.log(p1);

function falarFrase(comeco) 
{
    function falarResto(resto)
    {
        return comeco + ' ' + resto;
    }

    return falarResto;
}

const fala = falarFrase("Hello ");
const resto = fala("World");
console.log(resto);

function criarMultiplicador(multiplicador)
{
    return function(n) {
        return n * multiplicador
    }
}

const duplica = criarMultiplicador(2);
console.log(duplica(10));