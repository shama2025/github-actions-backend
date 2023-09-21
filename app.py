#This app.py file will contain the backend for the dynamic web applications
from flask import Flask,render_template

app = Flask(__name__)

@app.route("/")
def helloWorld():
    return render_template('test.html')
