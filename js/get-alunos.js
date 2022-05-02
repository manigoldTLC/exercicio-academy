window.onload = function () {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://five-turma-3.herokuapp.com/alunos");

    xhr.addEventListener("load", function () {

        if (xhr.status == 200) {

            let resposta = xhr.responseText;
            let alunos = JSON.parse(resposta);

            alunos.lista.forEach(aluno => {
                adicionaCardSecao(aluno);
            })

        }

    })

    xhr.send();
}
