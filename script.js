//INÍCIO DO MODAL
const modal = document.querySelector(".sobre-container")

function openModal(){
    modal.classList.add('active')
}

function closeModal(){
    modal.classList.remove('active')
}

//FIM DO MODAL



//FUNÇÃO DE TROCAR TEMA

const dark = document.querySelector(".theme")

dark.addEventListener('click', (e) =>{
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
    } else{
        html.classList.add('dark')
    }
})

const darkPhone = document.querySelector(".black")

darkPhone.addEventListener('click', (e) =>{
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
    } else{
        html.classList.add('dark')
    }
})

//FIM DA FUNÇÃO DE TROCAR TEMA

//API PARA FILTRAR LISTA DE AMIGOS


const result = document.getElementById('result') //Pegando elementos do HTML e atribuindo variáveis 
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e)=> filterData(e.target.value)) //Pega o valor que foi digitado na caixa de pesquisa


async function getData(){
    const res = await fetch('https://randomuser.me/api?results=50') //Pegar 50 usuários da API

    const {results} = await res.json()

    result.innerHTML = ''

    results.forEach(user =>{
        const li = document.createElement('li') //Criar a lista no HTML

        listItems.push(li)

        li.innerHTML = //Atribuindo os dados da API
                 `
                    <img src="${user.picture.large}" alt="${user.name.first}"> 
                    <div class="user-info">
                        <h4>${user.name.first} ${user.name.last}</h4>
                        <p>${user.location.city}, ${user.location.country}</p>
                    </div>
                 `

                 result.appendChild(li)              
    })
}


function filterData(searchTerm){
    listItems.forEach(item =>{
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide') //Utiliza a classe hide do CSS
        }
        else{
            item.classList.add('hide') //Adiciona a classe
        }
    })
}

//FIM DO FILTRAR LISTA DE AMIGOS