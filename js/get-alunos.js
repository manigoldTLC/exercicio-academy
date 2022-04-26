// let requisicao;

// let botaoBuscar = document.querySelector("#buscar-alunos");

// botaoBuscar.addEventListener("click", function() {
//     makeRequest('https://five-turma-3.herokuapp.com/alunos');
// }) 

// function makeRequest(url) {

//     if (window.XMLHttpRequest) {
//         requisicao = new XMLHttpRequest();
    
//     } else if (window.ActiveXObject) {
//         // garantindo que funcione em todos os navegadores
    
//         try {
//             requisicao = new ActiveXObject("Msxml2.XMLHTTP");
//         }
//         catch (e) {
//             try {
//                 requisicao = new ActiveXObject("Microsoft.XMLHTTP");
//             }
//             catch (e) {
//                 console.log(`Exceção: ${e}`);
//             }
//         }
//     }

//     if (!requisicao) {
//         console.log('Não é possível criar uma instância XML');
//         return false;
//     }

//     requisicao.onreadystatechange = loadContent;
//     requisicao.open('GET', url);
//     requisicao.send();
// }

// function loadContent() {
//     try {

//         if (requisicao.readyState === 4) {
    
//             if (requisicao.status === 200) {
//                 let resposta = requisicao.responseText;
//                 let alunos = JSON.parse(resposta);

//                 alunos = alunos["lista"];
                
//                 alunos.forEach(aluno => {
//                     console.log(adicionaCardSecao(aluno));
//                 });
    
//             } else {
//                 console.log("Oops, algum problema aconteceu")
//             }
//         }
        
//     } catch (e) {
//         console.log(`Exceção: ${e.description}`)
//     }
// }

let botaoBuscar = document.querySelector("#buscar-alunos");

botaoBuscar.addEventListener("click", function() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://five-turma-3.herokuapp.com/alunos");

    xhr.addEventListener("load", function() {
        
        if (xhr.status == 200) {

            let resposta = xhr.responseText;
            let alunos = JSON.parse(resposta);
            alunos = alunos["lista"]

            console.log(alunos)

            alunos.forEach(aluno => {
                adicionaCardSecao(aluno);
            })
            
        }

    })

    xhr.send();
});

