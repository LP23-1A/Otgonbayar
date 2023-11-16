let body = document.querySelector('body')
let container = document.querySelector('container')
let bgaopa = document.querySelector('bgaopa')
let modal = document.querySelector('.modal')
let addcard = document.querySelector('.addcard')
let addtaskbtn = document.querySelector('.addtaskbtn')
let addbtn = document.querySelector('.addbtn')
let countnum = document.querySelectorAll('.count')

let counttodo = document.querySelector('.counttodo')
let countprogress = document.querySelector('.countprogress')
let countstuck = document.querySelector('.countstuck')
let countdone = document.querySelector('.countdone')

function popup() {
    modal.style.display = "block"
}
function none() {
    modal.style.display = "none"
}
function rmvid() {
    return "id-" + Math.random()
}

let data = []

addbtn.onclick = none

addtaskbtn.onclick = adddata

function adddata() {
    let title = document.getElementById('title').value
    let description = document.getElementById('description').value
    let status = document.getElementById('status').value
    let priority = document.getElementById('priority').value
    data.push({ title, description, status, priority, id: rmvid() })
    render(data)
    draganddrop()
}

const removecard = (el) => {
    const filterid = data.filter((item) => item.id !== el.id)
    data = filterid
    render(filterid)
}

const donecard = (el) => {
    data.map((item) => {
        if (item.id === el.id) {
            item.status = "Done";
        }
    });
    render(data);
};
    let count = {
        todo: 0,
        inprogress: 0,
        stuck: 0,
        done: 0,
    }
function render(data) {

    const empty = document.querySelectorAll('.empty')
    empty[0].innerHTML = ""
    empty[1].innerHTML = ""
    empty[2].innerHTML = ""
    empty[3].innerHTML = ""
    data.map((el) => {
        const carddata = `
        <div class="cardtext bg-white flex gap-12 justify-between" draggable="true" id="${el.id}">
        <div class="done icon flex justify-center align-center grey-hover margin-top-5" id="${el.id}">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                </svg>
            </div>
        </div>
        <div>
            <h4 class="margin-top-5">${el.title}</h4>
            <p class="margin-top-5">${el.description}</p>
            <div class="category flex justify-center align-center grey-hover margin-top-5">${el.priority}</div>
        </div>
        <div>
            <div class= "remove icon flex justify-center align-center margin-top-5 grey-hover" id="${el.id}">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                    </svg>
                </div>
            </div>
                <div class="edit icon flex justify-center align-center grey-hover margin-top-5" id="${el.id}">
                <div><i class='fa-solid fa-pen-to-square'></i></div>
            </div>
        </div>
        </div>`
        if (el.status === "todo") {
            empty[0].innerHTML += carddata
            count.todo += 1
        } else if (el.status === "inprogress") {
            empty[1].innerHTML += carddata
            count.inprogress += 1
        } else if (el.status === "Stuck") {
            empty[2].innerHTML += carddata
            count.stuck += 1
        } else if (el.status === "Done") {
            empty[3].innerHTML += carddata
            count.done += 1
        }
    })
    counttodo.innerHTML = count.todo
    countprogress.innerHTML = count.inprogress
    countstuck.innerHTML = count.stuck
    countdone.innerHTML = count.done

    let removebtn = document.querySelectorAll('.remove')
    let donebtn = document.querySelectorAll('.done')
    // let editbtn = document.querySelectorAll('.edit')

    removebtn.forEach((element) => {
        element.onclick = () => removecard(element)
    })
    donebtn.forEach((element) => {
        element.onclick = () => donecard(element);
    });
    draganddrop()
}
const cardtodo = document.querySelector('#cardtodo')
const cardprogress = document.querySelector('#cardprogress')
const cardstuck = document.querySelector('#cardstuck')
const carddone = document.querySelector('#carddone')

function draganddrop() {
    const boards = document.querySelectorAll(".card")
    const carddata = document.querySelectorAll(".empty")
    let draggeditem = null

    carddata.forEach((card) => {
        card.addEventListener('dragstart', (event) => {
            event.target.value
            draggeditem = event.target
            event.dataTransfer.setData('text', event.target.getAttribute('id'))
        })
        card.addEventListener('dragend', () => {
            draggeditem = null
        })
    })
    boards.forEach((board, index) => {
        board.addEventListener('dragover', (event) => {
            event.preventDefault()
        })
        board.addEventListener('dragenter', (event) => {
            event.preventDefault()
            if (draggeditem) {
                const dragging = draggeditem.parentNode;
                if (dragging !== event.currentTarget) {
                    event.currentTarget.querySelector('.empty').appendChild(draggeditem);
                }
            }
        })
        board.addEventListener('dragleave', () => { });
        board.addEventListener('drop', (event) => {
        event.preventDefault();
            let id = draggeditem.getAttribute("id")
            data.filter((el) => {
                if (el.id === id) {
                if (el.status === "todo") {
                      count.todo -= 1;
                } else if (el.status === "inprogress") {
                      count.inprogress -= 1;
                } else if (el.status === "Stuck") {
                      count.stuck -= 1;
                } else if (el.status === "Done") {
                      count.done -= 1;
                }
                el.status = id
                if (index === 0) {
                    el.status = "todo";
                } else if (index === 1) {
                    el.status = "inprogress";
                } else if (index === 2) {
                    el.status = "Stuck";
                } else if (index === 3) {
                    el.status = "Done";
                }
                  if (el.status === "todo") {
                    count.todo += 1;
                } else if (el.status === "inprogress") {
                    count.inprogress += 1;
                } else if (el.status === "Stuck") {
                    count.stuck += 1;
                } else if (el.status === "Done") {
                    count.done += 1;
                }
                }
            })
            counttodo.innerHTML = count.todo
            countprogress.innerHTML = count.inprogress
            countstuck.innerHTML = count.stuck
            countdone.innerHTML = count.done
        })
    })
}