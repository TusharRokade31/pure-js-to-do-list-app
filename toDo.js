
let todoList = []
displayItem()
let inp = document.querySelector("#inp")
let inpDate = document.querySelector("#inp-date")
let addbtn = document.querySelector("#addbtn")



function setatt(){
    addbtn.setAttribute("onclick", "addtodo()")
}

function addtodo(){
    todoList.push({item:inp.value, dueDate:inpDate.value})
    
    if(inp.value !== ""){
        inp.value = ""
        inpDate.value = ""
        displayItem()
    }else{
        location.reload();
    }
    addbtn.removeAttribute("onclick")
}


function displayItem(){
    let displayContainer = document.querySelector(".todoContainer")
    let newHtml = ''
        for(let i = 0; i< todoList.length; i++){
            let {item,dueDate} = todoList[i]
            newHtml += `
            <div class="items">
                <p class="list">${item}</p>
                <p class="list">${dueDate}</p>
                <i style="font-size:24px; cursor: pointer;" onclick="todoList.splice(${i},1); displayItem()" class="fa">&#xf014;</i>
            </div>`
            
            }
        displayContainer.innerHTML = newHtml
    }
    