"""This file will house the testing for the web applications"""
from playwright.sync_api import Page, expect


def test_home_page(page: Page):
    """Will test the navBar.html and check each of the pages"""
    page.goto("http://localhost:5000/")
    page.get_by_role("link", name="Page One").click()
    page.get_by_role("link", name="Page Two").click()
    page.get_by_role("link", name="Page Three").click()


def test_page_one(page: Page):
    """Will click the button ten times to show popup and then press cancel"""
    page.goto("http://localhost:5000/pageOne")
    i = 0
    while i != 11:
        page.get_by_role("button", name="Click Me!").click()
        i += 1
    page.get_by_role("button", name="Close").click()


def test_page_two(page: Page):
    """Will input the string ABUV in morse code"""
    page.goto("http://localhost:5000/pageTwo")
    page.get_by_placeholder("Enter text ").click()
    page.get_by_placeholder("Enter text ").fill(".-/-.../..-/...-")
    page.get_by_placeholder("Enter text ").press("Enter")
    expect(page.locator(".translateText")).to_be_visible()


def test_page_three(page: Page):
    """Will confirm there is the loading text on screen"""
    page.goto("http://localhost:5000/pageThree")
    expect(page.locator(".loading-text")).to_have_text("Loading...")
