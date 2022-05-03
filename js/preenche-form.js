function editarAluno(id) {
    const url = `https://five-turma-3.herokuapp.com/alunos/${id}`

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("aluno", JSON.stringify(data.aluno[0]));
            listarAluno();
        })
}


function listarAluno() {
    window.location = "edit-form.html";
}


function preencheFormulario() {
    const aluno = JSON.parse(localStorage.getItem("aluno"));
    const nome = document.querySelector("#nome");
    const nascimento = document.querySelector("#nascimento");
    const cpf = document.querySelector("#cpf");
    const cep = document.querySelector("#cep");
    const endereco = document.querySelector("#endereco");
    const numero = document.querySelector("#numero");
    const complemento = document.querySelector("#complemento");
    const bairro = document.querySelector("#bairro");
    const cidade = document.querySelector("#cidade");
    const estado = document.querySelector("#estado");
    const telefone = document.querySelector("#telefone");
    
    nome.value = aluno.nm_pessoa;
    nascimento.value = aluno.dt_nascimento;
    cpf.value = aluno.ds_cpf;
    cep.value = aluno.ds_cep;
    endereco.value = aluno.ds_logradouro;
    numero.value = aluno.ds_numero;
    complemento.value = aluno.ds_complemento;
    bairro.value = aluno.ds_bairro;
    cidade.value = aluno.ds_cidade;
    estado.value = aluno.ds_estado;
    telefone.value = aluno.ds_telefone;
}

window.onload = preencheFormulario();
