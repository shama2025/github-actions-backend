let param = new URLSearchParams(window.location.search)
let user_type = param.get("user_type")
let username = param.get("username")
const class_input = document.getElementById('class_input')
const add_class_btn = document.getElementById('add_class_btn')
const class_table = document.getElementById('class_table')
const add_class_txt = document.querySelector('#add_class')
const username_display = document.getElementById('username_display')

//disabled button on load
window.onload = function disableBtn(){
username_display.innerHTML = username
   if( user_type.charAt(0) != "s"){
        class_input.style.display = "block";
   }
}

add_class_btn.addEventListener('click', () =>{
   const new_row = class_table.appendChild(document.createElement('tr'))
   const new_data = new_row.insertCell(0)
   new_data.innerHTML = add_class_txt.value
   add_class_txt.value = ""
})
