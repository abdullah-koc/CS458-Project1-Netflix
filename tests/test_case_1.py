from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

# Test Case Description --> User logs in with correct e-mail and password
s = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=s)
driver.implicitly_wait(5)
driver.maximize_window()
driver.get('http://localhost:3000')
driver.find_element(By.ID, 'mailOrPhone').send_keys('examplemail@gmail.com')
driver.find_element(By.ID, 'password').send_keys('123456789')
driver.find_element(By.ID, 'signInButton').click()
assert driver.find_element(By.ID, 'notistack-snackbar').text == 'Login successful!'
