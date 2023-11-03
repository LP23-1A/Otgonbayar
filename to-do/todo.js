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

function setData() {
    data.push({exmaple, example})
}

addbtn.onclick = none

add[0].onclick = modalcard
add[1].onclick = modalcard
add[2].onclick = modalcard
add[3].onclick = modalcard