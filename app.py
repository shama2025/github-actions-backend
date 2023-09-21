#This app.py file will contain the backend for the dynamic web applications
from flask import Flask

app = Flask(__name__)

@app.route("/")
def helloWorld():
    return "<p> Hi there from page 1</p>"
