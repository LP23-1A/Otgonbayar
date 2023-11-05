let body = document.querySelector('body')
let container = document.querySelector('.container')
let modal = document.querySelector('.modal')
let add = document.querySelectorAll('.add')
let addbtn = document.querySelector('.addbtn')
let addtask = document.querySelector('.addtask')
let bgopacity = document.querySelector('.bgopacity')
let cards = document.querySelector('.cards')

function modalcard() {
    modal.style.display = 'flex'
    bgopacity.style.display = 'flex'
    cards.style.opacity = '0.7'
}
function none() {
    modal.style.display = 'none'
    bgopacity.style.display = 'none'
    cards.style.opacity = '1'
}

let remove = document.getElementsByClassName("remove");
for (let a = 0; a < remove.length; a++) {
    remove[a].onclick = function() {
    let rmv = document.querySelector('.card-text');
    rmv.remove(remove)
    }
}

const data = []
addtask.onclick = adddata

function adddata() {
    let title = document.getElementById('title')
    let description = document.getElementById('desc')
    let status = document.getElementById('status')
    let priority = document.getElementById('priority')
    data.push({ title, description, status, priority })
    render(data)
}
function render(data) {
    let card = document.getElementsByClassName('card')
    card[0].innerHTML = ''
    card[1].innerHTML = ''
    card[2].innerHTML = ''
    card[3].innerHTML = ''
    data.map((el) => {
     const todo = `
     <div class = "todo">
        <p>${el.title}</p>
        <p>${el.description}</p>
        <span>${el.priority}</span>
    </div>`
    if(el.status === "todo"){
        card[0].innerHTML += todo
    }else if (el.status === "inprogress"){
        card[1].innerHTML += todo
    }else if (el.status === "stuck"){
        card[2].innerHTML += todo
    }else if (el.status === "done"){
        card[3].innerHTML += todo
    }
    card.innerHTML += todo
    })
}

addbtn.onclick = none

add[0].onclick = modalcard
add[1].onclick = modalcard
add[2].onclick = modalcard
add[3].onclick = modalcard