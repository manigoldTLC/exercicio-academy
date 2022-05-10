const alunos = document.getElementById("lista-alunos");
const btnEditar = document.getElementById("botao-editar");

const nomeValue = document.querySelector("#nome");
const nascimentoValue = document.querySelector("#nascimento");
const observacaoValue = document.querySelector("#message-text");
const cpfValue = document.querySelector("#cpf");
const cepValue = document.querySelector("#cep");
const enderecoValue = document.querySelector("#endereco");
const complementoValue = document.querySelector("#complemento");
const numeroValue = document.querySelector("#numero");
const bairroValue = document.querySelector("#bairro");
const cidadeValue = document.querySelector("#cidade");
const estadoValue = document.querySelector("#estado");
const telefoneValue = document.querySelector("#telefone");
const emailValue = document.querySelector("#email");


alunos.addEventListener("click", (e) => {
    e.preventDefault();

    let botaoEditar = e.target.id == "editar";
    let id = parseInt(e.target.parentElement.dataset.id);

    if (botaoEditar) {
        fetch(`https://five-turma-3.herokuapp.com/alunos/${id}`)
            .then(resposta => resposta.json())
            .then(data => {
                nomeValue.value = data.aluno[0].nm_pessoa;
                nascimentoValue.value = data.aluno[0].dt_nascimento;
                cpfValue.value = data.aluno[0].ds_cpf;
                cepValue.value = data.aluno[0].ds_cep;
                enderecoValue.value = data.aluno[0].ds_logradouro;
                complementoValue.value = data.aluno[0].ds_complemento;
                bairroValue.value = data.aluno[0].ds_bairro;
                cidadeValue.value = data.aluno[0].ds_cidade;
                estadoValue.value = data.aluno[0].ds_estado;
                telefoneValue.value = data.aluno[0].ds_telefone;
                numeroValue.value = data.aluno[0].ds_numero;
                emailValue.value = data.aluno[0].ds_email;
                observacaoValue.value = data.aluno[0].ds_observacao;
            })

    }

    btnEditar.addEventListener("click", (e) => {
        e.preventDefault();

        if (validaCpf(cpfValue.value) && validaData(nascimentoValue) && validaEmail(emailValue)) {
            fetch("https://five-turma-3.herokuapp.com/alunos", {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Methods': '*',
                    'Access-Control-Allow-Headers': 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization'
                },
                body: JSON.stringify({
                    nm_pessoa: nomeValue.value,
                    dt_nascimento: nascimentoValue.value,
                    ds_cpf: cpfValue.value,
                    ds_email: emailValue.value,
                    ds_telefone: telefoneValue.value,
                    ds_cep: cepValue.value,
                    ds_logradouro: enderecoValue.value,
                    ds_numero: numeroValue.value,
                    ds_complemento: complementoValue.value,
                    ds_bairro: bairroValue.value,
                    ds_cidade: cidadeValue.value,
                    ds_estado: estadoValue.value,
                    ds_observacao: observacaoValue.value,
                    nr_sequencia: id
                })
            })
                .then(resposta => resposta.json())
                .then(() => location.reload())
                .catch(error => console.error(error))
        }

    })
})