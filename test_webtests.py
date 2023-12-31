"""This file will house the testing for the web applications"""
import datetime
from playwright.sync_api import Page


def test_home_page(page: Page):
    """Will test the navBar.html and check each of the pages"""
    page.goto("http://localhost:5000/")
    page.get_by_role("link", name="Page One").click()
    page.get_by_role("link", name="Page Two").click()
    page.get_by_role("link", name="Page Three").click()


def test_page_one(page: Page):
    """Will click the button ten times to show popup and then press cancel"""
    date = datetime.datetime.now()
    page.goto("http://localhost:5000/pageOne")
    bool(
        page.get_by_text("Tue Sep 26 2023 19:45:20 GMT-0400 (Eastern Daylight Time)")
        == date
    )


def test_page_two(page: Page):
    """Will input the string ABUV in morse code"""
    page.goto("http://localhost:5000/pageTwo")
    page.get_by_label("Enter something:").click()
    page.get_by_label("Enter something:").fill("ABCDEFG")
    user_input = page.locator("user_input").input_value
    page.get_by_role("button", name="Submit").click()
    bool(page.text_content == user_input)


def test_page_three_student(page: Page):
    """Will test the student side of the web page"""
    page.goto("http://localhost:5000/pageThree")
    page.get_by_placeholder("Username...").click()
    page.get_by_placeholder("Username...").fill("Username")
    page.get_by_placeholder("Username...").press("Tab")
    page.get_by_placeholder("Password...").fill("password")
    page.get_by_label("Student:").check()
    page.get_by_role("button", name="Submit login form!").click()
    is_hidden = page.get_by_role("div, id=class_input").is_visible
    bool(not is_hidden)


def test_page_three_faculty(page: Page):
    """Will test the faculty side of the web page"""
    page.goto("http://localhost:5000/pageThree")
    page.get_by_placeholder("Username...").click()
    page.get_by_placeholder("Username...").fill("UsernameFaculty")
    page.get_by_placeholder("Username...").press("Tab")
    page.get_by_placeholder("Password...").fill("PasswordFaculty")
    page.get_by_label("Faculty").check()
    page.get_by_role("button", name="Submit login form!").click()
    page.get_by_placeholder("Add Class Name...").click()
    page.get_by_placeholder("Add Class Name...").fill("Dud Class two")
    page.get_by_role("button", name="Add Class!").click()
    is_hidden = page.get_by_role("div, id=class_input").is_visible
    bool(is_hidden)
