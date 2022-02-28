# CS458-Project1-Netflix

Team Members:
- Mehmet Çalışkan
- İlke Doğan
- Kaan Atakan Aray
- Muhammet Abdullah Koç

Steps to run the web application:

```sh
cd netflix-login-page
npm install
npm start
```

Steps to run a default login test case: (Selenium is required to run the test cases. Install it with `pip install selenium`)

```sh
cd tests
python3 test_case_1.py
```
Steps to run a Facebook Login test case:

```sh
cd tests
cd facebook
python3 test_case_4.py
```

**NOTE\:** Refer to the Facebook Account #1 in the report for test case 4.

**NOTE\:** If you are going to execute the Facebook Login test cases, configure the dev server to serve pages over HTTPs.
To do this, set the `HTTPS` environment variable to `true`, then start the dev server as usual with `npm start`:

### Windows (cmd.exe)

```cmd
set HTTPS=true&&npm start
```

(Note: the lack of whitespace is intentional.)

### Windows (Powershell)

```Powershell
($env:HTTPS = "true") -and (npm start)
```

### Linux, macOS (Bash)

```sh
HTTPS=true npm start
```

Note that the server will use a self-signed certificate, so your web browser will almost definitely display a warning upon accessing the page.
**Source for the HTTPS tutorial\:** https://create-react-app.dev/docs/using-https-in-development/
