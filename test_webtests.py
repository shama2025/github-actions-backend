import pytest
from flask import Flask
from webapp import app


def test_page_one(client):
    response = client.get("/pageOne")
    assert b" <h3>Welcome to Page three!</h3>" in response.data

test_page_one(app.test_client())