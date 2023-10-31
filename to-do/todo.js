let body = document.querySelector('body')
let container = document.querySelector('.container')
let modal = document.querySelector('.modal')
let add = document.querySelectorAll('.add')
let addbtn = document.querySelector('.addbtn')
let addtask = document.querySelector('.addtask')

function modalcard() {
    modal.style.opacity = '1'
}
function none() {
    modal.style.opacity = '0'
}
function bgblack() {
    addtask.style.backgroundColor = 'black'
}

addbtn.onclick = none
add[0].onclick = modalcard
add[1].onclick = modalcard
add[2].onclick = modalcard
add[3].onclick = modalcard