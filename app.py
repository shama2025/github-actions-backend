"""This app.py file will contain the backend for the dynamic web applications"""
from flask import Flask, render_template
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

@app.route("/pageThree")
def page_three():
    """Will display pageThree.html"""
    return render_template("pageThree.html")
