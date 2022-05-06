function campoRequerido(input, nomeCampo) {
    if (input.value.length == 0) {
        alert(`Campo ${nomeCampo} não pode estar vazio`);

        return false;
    }
    return true;
}

function validaEmail(email) {
    let re = /\S+@\S+\.\S+/;

    return re.test(email.value);
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

function validaData(data) {
    let anoAtual = new Date().getFullYear();

    let anoInput = data.value.split("-");

    if (anoInput[0] >= anoAtual || anoInput[0] < 1905) {
        alert("Insira uma data válida");

        return false;
    }

    return true;
}