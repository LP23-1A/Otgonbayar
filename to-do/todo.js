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

// let remove = document.getElementsByClassName("remove");
// for (let a = 0; a < remove.length; a++) {
//     remove[a].onclick = function() {
//     let rmv = document.querySelector('.card-text');
//     rmv.remove(remove)
//     }
// }

const data = [{
    title:history,
    desc:hi,
    status:todo
}

]

function adddata() {
    let title = document.getElementById('title').value
    let description = document.getElementById('desc').value
    let status = document.getElementById('status')
    let priority = document.getElementById('priority')
    data.push({ title, description, status, priority })
    render(data)
    console.log(title);
}
function render(data) {
    let card = document.getElementsByClassName('card')
   
    data.map((el) => {
     const todo = `
     <div class="card-text bg-white b-radius-5 flex p-8 gap-12">
                <div class="done w-24 icon flex justify-center align-center grey-hover m-top-5px">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                        <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                        </svg>
                    </div>
                </div>
                <div class="w-206">
                    <h4 class="m-top-5px">${title}</h4>
                    <p class="m-top-5px">T${desc}</p>
                    <div class="category f-sz-12 flex justify-center align-center m-top-5px">${priority}</div>
                </div>
                <div class="w-24">
                    <div class="remove icon flex justify-center align-center grey-hover m-top-5px">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                            <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="icon flex justify-center align-center grey-hover m-top-5px">
                        <div><i class='fa-solid fa-pen-to-square'></i></div>
                    </div>
                </div>
            </div>
     `
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
addtask.onclick = adddata

addbtn.onclick = none

add[0].onclick = modalcard
add[1].onclick = modalcard
add[2].onclick = modalcard
add[3].onclick = modalcard