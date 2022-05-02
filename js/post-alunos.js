const form = document.getElementById("form-adiciona");
const url = "https://five-turma-3.herokuapp.com/alunos";

let nome = document.querySelector("#nome");
let cpf = document.querySelector("#cpf");
let nascimento = document.querySelector("#nascimento");
let telefone = document.querySelector("#telefone");
let email = document.querySelector("#email");
let data = document.querySelector("#nascimento");


form.addEventListener("submit", function (e) {
    e.preventDefault();


    if (
        verificaCampoVazio(nome, "nome") && verificaCampoVazio(nascimento, "nascimento") && 
        verificaCampoVazio(cpf, "cpf") && verificaCampoVazio(telefone, "telefone") &&
        validaData(data) && validaCpf(cpf) && validaEmail(email)
    ) {

        const dadosFormulario = new FormData(form);
        const searchParams = new URLSearchParams();

        for (const pair of dadosFormulario) {
            searchParams.append(pair[0], pair[1]);
        }

        fetch(url, {
            method: 'post',
            body: searchParams

        }).then(() => {
            alert("Aluno cadastrado com sucesso!");

        }).catch((error) => {
            alert(error)
        })
    }

})


function verificaCampoVazio(campo, nome) {
    if (campo.value == "") {
        alert(`O campo ${nome} deve ser preenchido`);

        return false;
    }

    return true;
}


function validaEmail(email) {
    let re = /\S+@\S+\.\S+/;

    return re.test(email.value);
}


function validaData(data) {
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear()

    data = data.value.split("-");

    if (data[0] >= anoAtual || data[0] < 1905) {
        alert("Insira uma data válida");

        return false;
    }

    return true;
}


function validaCpf(strCPF) {
    let soma;
    let resto;
    soma = 0;

    if (strCPF.value == "00000000000") {
        alert("Insira um CPF válido");
        return false;
    }

    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCPF.value.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) {
        resto = 0;
    }

    if (resto != parseInt(strCPF.value.substring(9, 10))) {
        alert("Insira um CPF válido");
        return false;
    }

    soma = 0;
    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCPF.value.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) {
        resto = 0;
    }

    if (resto != parseInt(strCPF.value.substring(10, 11))) {
        alert("Insira um CPF válido");
        return false;
    }

    return true;
}


function mascaraTelefone() {
    let telefone = document.querySelector("#telefone");

    if (telefone.value.length == "") {
        telefone.value += "("
    }

    else if (telefone.value.length == 3) {
        telefone.value += ") ";
    }

    else if (telefone.value.length == 9) {
        telefone.value += "-";
    }
}

