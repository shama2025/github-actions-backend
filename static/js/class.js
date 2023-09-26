let param = new URLSearchParams(window.location.search)
let user_type = param.get("user_type")
const class_input = document.getElementById('class_input')
const add_class_btn = document.getElementById('add_class_btn')
const class_table = document.getElementById('class_table')
const add_class_txt = document.querySelector('#add_class')

//disabled button on load

window.onload = function disableBtn(){
   if(user_type == 'faculty'){
        class_input.style.display = "block";
   }
}

add_class_btn.addEventListener('click', () =>{
   const new_row = class_table.appendChild(document.createElement('tr'))
   const new_data = new_row.insertCell(0)
   new_data.innerHTML = add_class_txt.value
   add_class_txt.value = ""
})
