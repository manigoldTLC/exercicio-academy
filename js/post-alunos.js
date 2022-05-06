const form = document.getElementById("form-adiciona");
const url = "https://five-turma-3.herokuapp.com/alunos";

const nomeValue = document.querySelector("#nome");
const nascimentoValue = document.querySelector("#nascimento");
const observacaoValue = document.querySelector("#message-text");
const cpfValue = document.querySelector("#cpf");
const cepValue = document.querySelector("#cep");
const enderecoValue = document.querySelector("#endereco");
const numeroValue = document.querySelector("#numero");
const complementoValue = document.querySelector("#complemento");
const bairroValue = document.querySelector("#bairro");
const cidadeValue = document.querySelector("#cidade");
const estadoValue = document.querySelector("#estado");
const telefoneValue = document.querySelector("#telefone");
const celularValue = document.querySelector("#celular");
const emailValue = document.querySelector("#email");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (
        campoRequerido(nomeValue, "nome") &&
        campoRequerido(cpfValue, "CPF") &&
        campoRequerido(nascimentoValue, "data de nascimento") &&
        campoRequerido(telefoneValue, "telefone") &&
        validaEmail(emailValue) &&
        validaCpf(cpfValue) &&
        validaData(nascimentoValue)
    ) {
        const dadosFormulario = new FormData(form);
        const searchParams = new URLSearchParams();
    
        for (const pair of dadosFormulario) {
            searchParams.append(pair[0], pair[1]);
        }
    
        fetch(url, {
            method: 'post',
            body: searchParams
    
        })
        .then(() => {
            alert("Aluno cadastrado com sucesso!");
        })
    
        .catch((error) => {
            alert(error)
        })
    }
})
