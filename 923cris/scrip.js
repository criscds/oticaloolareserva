/*const racainput = document.getElementById('raca-input');
const pesoBtn = document.getElementById('peso-btn');
const idadeResult = document.getElementById('idade-result');
const fotoResult = document.getElementById('foto-result');

const racaAnimal = document.getElementById('raca-animal');

racaAnimal.textContent = 'Shitzu'*/

const sectionCachorros = document.getElementById('cachorros')

const baseUrl = 'http://localhost:3000'

async function fetchDogs() {
    try {
        const response = await fetch(baseUrl+'/dogs/all');

        const data = await response.json();
    
        await updateUI(data)
        console.log(data)    
    } catch (error) {
        console.log(error.message)
    }
    
}

async function updateUI(cachorros){
    let dataHtml = ''
    for (const cachorro of cachorros){
        let cachorroHtml = `
        <div class="produtos">
            <div class="produto-card">
                <img src="duchi.jpeg" alt="Cachorro para adoção" width="100%" height="auto">
                <h3>${cachorro.nome}</h3>
                <p>Idade: ${cachorro.idade} ano(s) • Raça: ${cachorro.raca}</p>
                <p>Disponível: ${cachorro.disponivel? 'Sim' : 'Não'}
                <button class="btn-adotar">Adotar</button>
            </div>
        </div>  
        `
        dataHtml = dataHtml+ cachorroHtml;
    }

    sectionCachorros.innerHTML = dataHtml;
}

async function adopt(cachorro) {
        
}

fetchDogs()