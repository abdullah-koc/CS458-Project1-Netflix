from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager

# Test Case Description --> User logs in with Facebook login after his/her token expires
# We set this token expiration period to 1 minute, so this test user's token expires every 1 minute
# Use HTTPS in development!
# https://create-react-app.dev/docs/using-https-in-development/

s = Service(ChromeDriverManager().install())
options = webdriver.ChromeOptions()
options.add_argument('--allow-insecure-localhost')  # Ignore Chrome HTTPS error
driver = webdriver.Chrome(options=options, service=s)

driver.implicitly_wait(30)
driver.maximize_window()
driver.get('https://localhost:3000')

driver.find_element(By.ID, 'facebookLoginButton').click()

WebDriverWait(driver, 10).until(EC.number_of_windows_to_be(2))
driver.switch_to.window(driver.window_handles[1])

driver.find_element(By.ID, 'email').send_keys(
    "richard_aexumdh_alghcedhefaid@tfbnw.net")
driver.find_element(By.ID, 'pass').send_keys("cs458project")
driver.find_element(By.ID, 'loginbutton').click()
driver.find_element(
    By.XPATH,
    "//div[@aria-label='Continue']").click()

WebDriverWait(driver, 10).until(EC.number_of_windows_to_be(1))
driver.switch_to.window(driver.window_handles[0])

try:
    assert driver.find_element(
        By.ID,
        'notistack-snackbar').text == 'Login successful! Welcome, Richard Alghcedhefaid'
    print("Test is passed")
except AssertionError:
    print("Test is failed")
