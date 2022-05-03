let id;

fetch(`https://five-turma-3.herokuapp.com/alunos/${cardID()}`)
    .then((response) => response.json())
    .then((data) => {
        preencheFormulario(data.aluno[0]);
    })

setTimeout(() => {
    id = cardID();
}, 2000);


function preencheFormulario(data) {

    const nome = document.querySelector("#nome");
    // const nascimento = document.querySelector("#nascimento");
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
    // nascimento.value = data.dt_nascimento;
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

function loadConteudo() {
    const secao = document.querySelectorAll("#secao");
    let verifica = false;

    if (secao) {
        verifica = true;
    }

    return verifica;
}


function cardID() {
    let id;

    if (loadConteudo()) {

        const cards = document.querySelectorAll(".card");

        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener("click", () => {
                id = i;
                console.log(id);
                // window.location.href = "edit-form.html"
            })
        }
    }

    return 23;
}

