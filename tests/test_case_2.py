from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

# Test Case Description --> User logs in with correct phone number and password
s = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=s)
driver.implicitly_wait(5)
driver.maximize_window()
driver.get('http://localhost:3000')

driver.find_element(By.ID, 'mailOrPhone').send_keys('5454545454')
driver.find_element(By.XPATH, "//div[@class='selected-flag']").click()
driver.find_element(By.XPATH, "//li[@data-flag-key='flag_no_193']").click()

driver.find_element(By.ID, 'password').send_keys('qwerty123')

driver.find_element(By.ID, 'signInButton').click()

assert driver.find_element(By.ID, 'notistack-snackbar').text == 'Login successful!'