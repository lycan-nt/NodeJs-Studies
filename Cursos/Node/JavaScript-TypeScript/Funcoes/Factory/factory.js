//Factory Function
function criarPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        fala(assunto) {
            return `${this.nome} está ${assunto}`
        },
        altura,
        peso,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = criarPessoa('Felipe', 'D. Santos', 1.65, 65);
console.log(p1.imc());
const p2 = criarPessoa('Marcella', 'D. Santos', 1.65, 78);
console.log(p2.fala('falando sobre JS'));