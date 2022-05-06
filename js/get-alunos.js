const url = "https://five-turma-3.herokuapp.com/alunos";

window.onload = function () {
    fetch(url)
        .then(resposta => resposta.json())
        .then(data => {
            getAlunos(data.lista)
        })
    
}
