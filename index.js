let alunos = [{ nome: "caique", curso: "fullstack", faltas: [0], notas: [] },
{ nome: "alana", curso: "Adm", faltas: [0], notas: [] },
{ nome: "kauan", curso: "Direito", faltas: [0], notas: [] }];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function adicionarAluno(nome) {
    if (typeof nome == "string") {
        alunos.push({
            nome: nome,
            curso: [],
            faltas: [0],
            notas: []
        });
        console.log("Aluno adicionado com sucesso!")
    } else {
        console.log("Houve algum erro")
    }
}



function buscarAluno(aluno) {

    return alunos.filter(buscar => {
        return buscar.nome == aluno;
    })

}

function matricular({ nome, curso }, cursoMatricular) {

    if (curso.length > 0) {

        console.log("Aluno já matriculado")

    } else {

        curso.splice(0,1,cursoMatricular);

        console.log(`Aluno ${nome}, matriculado no curso de ${cursoMatricular}`);

    }

};


function aplicarFalta({nome, curso, faltas}, falta) {

    if(curso.length = 0){
        console.log("Aluno não está matriculado ainda");
    }else {
        
        faltas.push(falta)
        
        let soma = faltas.reduce(reducer)

        faltas.splice(0,2,soma)


        console.log(`O aluno ${nome}, acabou de receber ${falta}, e está com uma total de ${soma} faltas!`)
    }
}

function aplicarNota({nome, curso, notas}, nota){

    if(curso.length = 0){

        console.log("Aluno não está matriculado ainda")
    }else {

        notas.push(nota);

        console.log(`O aluno ${nome}, acabou de ganhar a nota ${nota}`)

    }

}

function aprovarAluno({nome, notas, faltas, curso}){

let soma = notas.reduce(reducer) ;

let aprovando = soma / notas.length;

if(faltas < 4 && aprovando >= 7){

    console.log(`O aluno ${nome} está aprovado no curso de ${curso}`)
}else {
    console.log(`O aluno ${nome} está reprovado no curso de ${curso}`)
}

}

function listarAlunos() {
    console.log(`Lista de alunos`)
    for (let i = 0; i < alunos.length; i++) {

        console.log(`-----------------
Nome: ${alunos[i].nome}
Curso: ${alunos[i].curso}
Faltas: ${alunos[i].faltas}
Notas: ${alunos[i].notas}`)
    }
    console.log("--------------");

};


adicionarAluno("Nayara");

matricular(alunos[3], "Informatica");

aplicarFalta(alunos[0], 3);

aplicarNota(alunos[0], 10);
aplicarNota(alunos[0], 6);

// aprovarAluno(alunos[0]);


// listarAlunos();
console.log(buscarAluno("Nayara"));
