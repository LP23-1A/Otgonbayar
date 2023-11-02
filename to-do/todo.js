let body = document.querySelector('body')
let container = document.querySelector('.container')
let modal = document.querySelector('.modal')
let add = document.querySelectorAll('.add')
let addbtn = document.querySelector('.addbtn')
let addtask = document.querySelector('.addtask')
let bgopa = document.querySelector('.bgopacity')

function modalcard() {
    modal.style.display = 'flex'
}
function none() {
    modal.style.display = 'none'
}
function bg() {
    bgopa.style.display = 'flex'
}

add[0].onclick = bg
add[1].onclick = bg
add[2].onclick = bg
add[3].onclick = bg

addbtn.onclick = none
add[0].onclick = modalcard
add[1].onclick = modalcard
add[2].onclick = modalcard
add[3].onclick = modalcard