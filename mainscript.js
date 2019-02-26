
const formEntry = document.querySelector('.form-entry')
const formListFullName = document.querySelector('.form-list--register')
const formListCPF = document.querySelector('.form-list--cpf')

let arr = []

const CreateItem = (activity, cpf, phone, email, gender, btday, status ) => {    
    let item = {
        activity: activity,
        cpf: cpf,
        phone: phone,
        email:email,
        gender:gender,
        btday: btday,
        status: status      
    }    
    arr.push(item)    
    return item
}

const FormValue = () => {
    let fullName = document.querySelector('#form-userName').value
    let listCPF = document.querySelector('#form-cpf').value
    let phoneNumber = document.querySelector('#form-phone').value
    let usermail = document.querySelector('#form-email').value
    let gender = document.querySelector('#form-gender').value
    let userstatus = document.querySelector('#form-status').value
    let birthday = document.querySelector('#form-birthday').value  

    return fullName + listCPF + phoneNumber + usermail + gender + userstatus + birthday       
}

const PrintItem = () => {
    formListFullName.innerHTML =''     
    arr = JSON.parse(localStorage.getItem('rutina'))
    console.log(arr)    
    if (arr === null){
        arr =[]
    } 
    else{
        arr.forEach(el =>{
            if(el.activity){
                formListFullName.innerHTML += `
                <div>
                    <b>${el.activity} </b>
                    <span> - <i class="material-icons">delete</i>
                    </span>
                </div>`  
            }  
        })
    }   
}
const SaveItem = () => {
    localStorage.setItem('rutina', JSON.stringify(arr))
    PrintItem()    
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
    CreateItem(FormValue())
    SaveItem();
    formEntry.reset(); 
})

document.addEventListener('DOMContentLoaded', PrintItem)

formListFullName.addEventListener('click', (e) => {
    e.preventDefault();    
    console.log(e.target)
    let deleteAction = e.target.innerHTML
    deleteAction = 'done'
    if(deleteAction === 'done'){
        const listItem = e.path[1].childNodes[1].innerHTML
        RemovefromList(listItem)
    }    
  })



