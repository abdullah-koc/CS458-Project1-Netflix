import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

# Test Case Description --> User logs in with Facebook login for the first time (Grants permission)
# Use HTTPS in development!
# https://create-react-app.dev/docs/using-https-in-development/

s = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=s)
driver.implicitly_wait(60)
driver.maximize_window()
driver.get('https://localhost:3000')

driver.find_element(By.ID, 'facebookLoginButton').click()

time.sleep(3)
driver.switch_to.window(driver.window_handles[1])

driver.find_element(By.ID, 'email').send_keys(
    "isabella_mupjfra_alghdgagegfaj@tfbnw.net")
driver.find_element(By.ID, 'pass').send_keys("cs458project")

driver.find_element(By.ID, 'loginbutton').click()
time.sleep(3)
driver.find_element(
    By.XPATH,
    "//div[@aria-label='Continue as Isabella']").click()

driver.switch_to.window(driver.window_handles[0])

time.sleep(3)
try:
    assert driver.find_element(
        By.ID,
        'notistack-snackbar').text == 'Login successful! Welcome, Isabella Alghdgagegfaj'
    print("Test is passed")
except AssertionError:
    print("Test is failed")
