const aluno = document.querySelector(".card__a");
const url = "https://five-turma-3.herokuapp.com/alunos";

window.onload = function () {

    fetch(url)

    .then((resposta) => resposta.json())
    .then((data) => {
        preencheFormulario(data);
    })
}



function preencheFormulario(data) {

    const nome = document.querySelector("#nome");
    const nascimento = document.querySelector("#nome");
    const cpf = document.querySelector("#cpf");
    const cep = document.querySelector("#cep");
    const endereco = document.querySelector("#endereco");
    const numero = document.querySelector("#numero");
    const complemento = document.querySelector("#complemento");
    const bairro = document.querySelector("#bairro");
    const cidade = document.querySelector("#cidade");
    const estado = document.querySelector("#estado");
    const telefone = document.querySelector("#telefone");

    nome.value = data.nm_pessoa;
    nascimento.value = data.dt_nascimento;
    cpf.value = data.ds_cpf;
    cep.value = data.ds_cep;
    endereco.value = data.ds_logradouro;
    numero.value = data.ds_numero;
    complemento.value = data.ds_complemento;
    bairro.value = data.ds_bairro;
    cidade.value = data.ds_cidade;
    estado.value = data.ds_estado;
    telefone.value = data.ds_telefone;

}
