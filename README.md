# backend for rareminds shortlisting task

**you need a api testing tool like postman or httpie , cause it's only the backend**


# Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Installation
# Clone the repository:
```bash
   git clone https://github.com/Devp-sriram/rareminds_project
```
# Installing the dependencies:

```bash
cd rareminds_project
npm install
```
# Start development server:

```bash
npm start
```

# Open your postman / browser at:
```bash
http://localhost:4000
```

# .env files:
```bash
MONGODB_URL = 'you mongo db cluster uri'
NODE_MAILER_USER = 'nodemailer id refer nodemailer npm'
NODE_MAILER_PASS = 'nodemailer pw'
signup_Secret_Token = 'jwt signup secert key'
login_secret_token = 'jwt login secert key use google keys'
BACKEND_URL = http://localhost:4000 || 'or hosted api url'
```

# head over to postman and create a post request put this on search bar:

```bash
http://localhost:4000/signin/verify
```

# and give a body of raw data in json fmt:
```bash
{
    "name" : "lawrance",
    "email" : "sriramraman100@gmail.com",
    "password": "Lawrance@110"
}
```
# and hit send , then you get 200 response check you mail you will receive a mail with token like this 
```bash
hi,there
welcome to app
thankyou for signinup click the below link to activate

clink here
regrads

Team
```


# click the link then your account get validated

# you see a page like this and receive a mail
```bash
registration sucess
welcome to app
you're registration succesful

regrads

Team
```


# you have succesfully signed yourself up 

# now login with post request

```bash
http://localhost:4000/login
```

# json body
```bash
{
    "email" : "sriramraman100@gmail.com",
    "password": "Lawrance@110"
}
```

# you will get a response of
```bash
'succesfully signined as (your name)'
```
