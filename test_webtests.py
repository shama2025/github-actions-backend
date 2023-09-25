"""This file will house the testing for the web applications"""
from app import app


def test_home_page(client):
    """Will test the home page of the application"""
    response = client.get("/")
    assert b"<h1>Hello World</h1>" in response.data

def test_page_one(client):
    """Will test page one of my application"""
    response = client.get("/pageOne")
    assert b"<h1>Hello World</h1>" in response.data

def test_page_two(client):
    """Will test page one of my application"""
    response = client.get("/pageTwo")
    assert b"<h1>Hello World</h1>" in response.data

def test_page_three(client):
    """Will test page one of my application"""
    response = client.get("/pageThree")
    assert b"<h1>Hello World</h1>" in response.data

test_home_page(app.test_client())
test_page_one(app.test_client())
test_page_two(app.test_client())
test_page_three(app.test_client())
