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

@app.route('/pageTwo/submit', methods=['POST'])
def page_two_submit():
    """This will grab a users form submition and return it"""
    user_form_input = request.form.get("user_input")
    return f"<h1>Hello user: {user_form_input}</h1>"

@app.route("/pageThree")
def page_three():
    """Will display pageThree.html"""
    return render_template("pageThree.html")
