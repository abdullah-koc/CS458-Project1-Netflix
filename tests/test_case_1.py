import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

# Test Case Description --> User logs in with correct e-mail and password
s = Service(ChromeDriverManager().install())
options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
driver = webdriver.Chrome(options=options, service=s)
driver.implicitly_wait(5)
driver.maximize_window()
driver.get('http://localhost:3000')
driver.find_element(By.ID, 'mailOrPhone').send_keys('examplemail@gmail.com')
driver.find_element(By.ID, 'password').send_keys('123456789')
driver.find_element(By.ID, 'signInButton').click()
time.sleep(2)
try:
    assert driver.find_element(
        By.ID, 'successMessage').text == 'User logged in successfully.'
    print("Test is passed")
except AssertionError:
    print("Test is failed")
