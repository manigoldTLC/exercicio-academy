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

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (
        campoRequerido(nomeValue.value, "nome") &&
        campoRequerido(nascimentoValue.value, "nascimento") &&
        campoRequerido(limpaCampo(cpfValue, "cpf"), "cpf") &&
        campoRequerido(limpaCampo(telefoneValue, "telefone"), "telefone") &&
        validaEmail(emailValue) &&
        validaCpf(limpaCampo(cpfValue, "cpf")) &&
        validaData(nascimentoValue)
    ) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization'
            },
            body: JSON.stringify({
                nm_pessoa: nomeValue.value,
                dt_nascimento: nascimentoValue.value,
                ds_cpf: limpaCampo(cpfValue, "cpf"),
                ds_email: emailValue.value,
                ds_telefone: limpaCampo(telefoneValue, "telefone"),
                ds_cep: limpaCampo(cepValue, "cep"),
                ds_logradouro: enderecoValue.value,
                ds_numero: numeroValue.value,
                ds_complemento: complementoValue.value,
                ds_bairro: bairroValue.value,
                ds_cidade: cidadeValue.value,
                ds_estado: estadoValue.value,
                ds_observacao: observacaoValue.value,
            })

        })
            .then(() => {
                alert("Aluno cadastrado com sucesso!");
            })

            .catch((error) => {
                alert(error);
            })
    }
})
