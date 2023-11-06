let body = document.querySelector('body')
let container = document.querySelector('container')

let data = []

function adddata() {
    let title = document.getElementById('title')
    let description = document.getElementById('description')
    let status = document.getElementById('status')
    let priority = document.getElementById('priority')
    data.push({ title, description, status, priority})
    
}