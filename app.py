#This app.py file will contain the backend for the dynamic web applications
from flask import Flask,render_template

app = Flask(__name__)

@app.route("/")
def navBar():
    return render_template('navBar.html')

@app.route("/pageOne")
def pageOne():
    return render_template('pageOne.html')