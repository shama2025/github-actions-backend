let param = new URLSearchParams(window.location.search)
let user_type = param.get("user_type")
const class_input = document.getElementById('class_input')
const add_class_btn = document.getElementById('add_class_btn')
const class_table = document.getElementById('class_table')
const add_class_txt = document.querySelector('add_class')
const body = document.querySelector('body')

body.addEventListener('load', ()=>{
    if(user_type == "student"){
    class_input.hidden = true
}else{
    class_input.hidden = false
}
})


add_class_btn.addEventListener('click', () =>{
   const new_row = class_table.appendChild(document.createElement('tr'))
   const new_data = new_row.insertCell(0)
   new_data.innerHTML = add_class_txt.value
})
