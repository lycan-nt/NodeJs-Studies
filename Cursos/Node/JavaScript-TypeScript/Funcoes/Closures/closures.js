function retornarFuncao(nome)
{
    return function () 
    {
        return nome;
    }
}

const funcao1 = retornarFuncao("Felipe D. Santos");
console.log(funcao1());

const funcao2 = retornarFuncao("Marcella D. Santos");
console.log(funcao2());