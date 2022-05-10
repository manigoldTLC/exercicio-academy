function campoRequerido(input, idElemento) {
    if (input.length == 0) {
        alert(`O campo ${idElemento} deve ser preenchido`);

        return false;
    }
    return true;
}

function limpaCampo(campo, nomeCampo) {
    if (nomeCampo == "cpf") {
        return campo.value.replace(".", "").replace(".", "").replace("-", "");
    }

    if (nomeCampo == "telefone") {
        return campo.value.replace("(", "").replace(")", "").replace(" ", "").replace("-", "");
    }

    if (nomeCampo == "cep") {
        return campo.value.replace("-", "");
    }
}

function validaEmail(email) {
    if (email.value == "") {
        alert("email deve ser preenchido");
        return false;
    }

    let re = /\S+@\S+\.\S+/;
    if (!re.test(email.value)) {
        alert("Insira um email válido");
        return false;
    }

    return true;
}

function validaCpf(strCPF) {
    let soma;
    let resto;
    soma = 0;

    if (strCPF == "00000000000") {
        alert("Insira um CPF válido");
        return false;
    }

    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) {
        resto = 0;
    }

    if (resto != parseInt(strCPF.substring(9, 10))) {
        alert("Insira um CPF válido");
        return false;
    }

    soma = 0;
    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) {
        resto = 0;
    }

    if (resto != parseInt(strCPF.substring(10, 11))) {
        alert("Insira um CPF válido");
        return false;
    }

    return true;
}

function validaData(data) {
    let anoAtual = new Date().getFullYear();

    let anoInput = data.value.split("-");

    if (anoInput[0] >= anoAtual || anoInput[0] < 1905) {
        alert("Insira uma data válida");

        return false;
    }

    return true;
}