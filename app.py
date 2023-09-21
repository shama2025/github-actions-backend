# This app.py file will contain the backend for the dynamic web applications
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def nav_bar():
    return render_template("navBar.html")


@app.route("/pageOne")
def page_one():
    return render_template("pageOne.html")
