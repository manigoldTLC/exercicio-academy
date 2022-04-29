const form = document.getElementById("form-adiciona");
const url = "https://five-turma-3.herokuapp.com/alunos";


form.addEventListener("submit", function(e) {
    e.preventDefault();


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

})
