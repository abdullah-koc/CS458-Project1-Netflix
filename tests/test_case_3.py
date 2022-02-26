import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

# Test Case Description --> User logs in with incorrect e-mail
s = Service(ChromeDriverManager().install())
options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
driver = webdriver.Chrome(options=options, service=s)
driver.implicitly_wait(5)
driver.maximize_window()
driver.get('http://localhost:3000')
driver.find_element(By.ID, 'mailOrPhone').send_keys('exampleemail@gmail.com')
driver.find_element(By.ID, 'password').send_keys('123456789')
driver.find_element(By.ID, 'signInButton').click()
time.sleep(2)
try:
    assert driver.find_element(
        By.ID,
        'errorMessage').text == "Sorry, we can't find an account with this email address. Please try again or create a new account."
    print("Test is passed")
except AssertionError:
    print("Test is failed")
