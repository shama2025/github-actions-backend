"""This app.py file will contain the backend for the dynamic web applications"""
from flask import Flask, render_template,request

app = Flask(__name__)


@app.route("/")
def nav_bar():
    """Will display the navbar.html file"""
    return render_template("navBar.html")


@app.route("/pageOne")
def page_one():
    """Will Display pageOne.html"""
    return render_template("pageOne.html")

@app.route("/pageTwo")
def page_two():
    """Will display pageTwo.html"""
    return render_template("pageTwo.html")

@app.route("/pageTwo/submit", methods=['POST'])
def page_two_submit():
    """This is the submit page where it renders the users input"""
    user_input = request.get_data("user_input")
    return render_template("navBar.html"),f"Your input was: {user_input}"

@app.route("/pageThree")
def page_three():
    """Will display pageThree.html"""
    return render_template("pageThree.html")

@app.route("/pageThree/student")
def page_three_student():
    """Will show the student side of the application"""
    return "<h1>hello from student</h1>"

@app.route("/pageThree/faculty")
def page_three_faculty():
    """Will show the faculty side of the application"""
    return "<h1>hello from faculty</h1>"
