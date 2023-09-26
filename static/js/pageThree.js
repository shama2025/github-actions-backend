const student = document.getElementById('student')
const faculty = document.getElementById('faculty')
const submit_btn = document.getElementById('submit_btn')
const username = document.getElementById('username').value
const password = document.getElementById('password').value

student.addEventListener('change', ()=>{
    faculty.disabled = true
})

faculty.addEventListener('change', ()=>{
    student.disabled = true
})


 submit_btn.addEventListener('click',() =>{
        if(student.checked){
            console.log("student")
            window.location.href = "http://localhost:5000/pageThree/class?user_type=student+username=" + username
        }else if(faculty.checked){
            console.log("faculty")
            window.location.href = "http://localhost:5000/pageThree/class?user_type=faculty+username=" + username
        }else if(faculty.checked){
        }else{
            alert("Need to click student or faculty")
        }
    })