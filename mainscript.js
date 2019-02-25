
const formEntry = document.querySelector('.form-entry')
const formList = document.querySelector('.form-list')
let arr = []

const CreateItem = (activity) => {    
    let item = {
        activity: activity       
    }    
    arr.push(item)    
    return item
}


const SaveItem = () => {
    localStorage.setItem('rutina', JSON.stringify(arr))
    PrintItem();
}

const PrintItem = () => {
    formList.innerHTML =''
    arr = JSON.parse(localStorage.getItem('rutina'))
    console.log(arr)
    
    if (arr === null){
        arr =[]
    } else{
        arr.forEach(el =>{
            console.log(el)
            formList.innerHTML += `
            <div>
                <b>${el.activity}</b>
                <span> - <i class="material-icons">delete</i>
                </span>
            </div>`
        })
    }
}

const RemovefromList = (activity) => {
    console.log(activity)
    let arrIndex
    arr.forEach((el, index) => {
        console.log(index)
        if(el.activity === activity){
            arrIndex = index;
        }
    })
    arr.splice(arrIndex,1)
    SaveItem()
}

formEntry.addEventListener('submit', (e) => {
    e.preventDefault();  
    
    let userActivity = document.querySelector('#form-activity').value
    console.log(userActivity)
    
    CreateItem(userActivity)
    SaveItem();
    formEntry.reset();
})

document.addEventListener('DOMContentLoaded', PrintItem)

formList.addEventListener('click', (e) => {
    e.preventDefault();    
    // console.log(e.target)
    let deleteAction = e.target.innerHTML
    deleteAction = 'done'
    if(deleteAction === 'done'){
        const listItem = e.path[1].childNodes[1].innerHTML
        RemovefromList(listItem)
    }
    
  })