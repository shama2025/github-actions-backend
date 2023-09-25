import pytest
from flask import Flask
from webapp import app


def test_page_one(client):
    response = client.get("/pageOne")
    assert b"<button>Click Me!</button>" in response.data

test_page_one(app.test_client())