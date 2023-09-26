const student = document.getElementById('student')
const faculty = document.getElementById('faculty')
const submit_btn = document.getElementById('submit_btn')
const username = document.getElementById('username')
const password = document.getElementById('password')



 submit_btn.addEventListener('click',() =>{
        if(student.checked){
            console.log("student")
            window.location.href = "http://localhost:5000/pageThree/class?user_type=student"
        }else if(faculty.checked){
            console.log("faculty")
            window.location.href = "http://localhost:5000/pageThree/class?user_type=faculty"
        }else{
            alert("Need to click student or faculty")
        }
    })