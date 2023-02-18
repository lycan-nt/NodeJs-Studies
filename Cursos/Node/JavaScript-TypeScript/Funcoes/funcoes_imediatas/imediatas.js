//IIFF

const nome = 'Marcella';

(function() {

    const sobreNome = 'D. Santos';

    function criarNome(nome) {
        return nome + ' ' + sobreNome;
    }

    function falarNome() {
        console.log(criarNome('Felipe'));
    }

    falarNome();

})()