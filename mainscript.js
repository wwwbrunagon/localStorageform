
const formEntry = document.querySelector('#form-entry')
const formList = document.querySelector('#form-list')
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
            formList.innerHTML += `<p>${el.activity}</p>`
        })
    }
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