function createAula(data){
    return `
        <button class="aula ${date.getHours() == data.horario ? 'started' : date.getHours() > data.horario ? 'finished' : 'notstarted' }">
            <a href="${data.link}">
                <h3>${data.nome}</h3>
                <p>${data.horario}:00 - ${data.horario}:50</p>
            </a>
        </button>
    `
}

function renderAulas(element){
    
    const hoje = dias.filter((element) =>{
        return element.id === date.getDay()
    })

    const materiasDeHoje = materias.filter( (element) =>{

        return element.id === hoje[0].materias[0] || element.id === hoje[0].materias[1] || element.id === hoje[0].materias[2] || element.id === hoje[0].materias[3]
    })

    
    console.log(materiasDeHoje)
    
    materiasDeHoje.sort((a,b)=>{
        return (a.horario > b.horario)? 1 : ((b.horario > a.horario)? -1 : 0) 
    })
    let teste = ''
    materiasDeHoje.forEach( element => {
        teste += createAula(element)
    });
    
    console.log(teste)
    // element.insertAdjacentHTML('afterend', teste)
    element.innerHTML = teste
}

const aula = document.getElementById('teste');
renderAulas(aula);

