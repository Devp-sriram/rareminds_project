**backend for rareminds shortlisting task**

**you need a api testing tool like postman or httpie , cause it's only the backend**


## Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Installation
1. Clone the repository:
```bash
   git clone https://github.com/Devp-sriram/rareminds_project
```
Installing the dependencies:

```bash
npm install
```
Start development server:

```bash
npm run dev
```

Open your browser at:
```bash
http://localhost:4000
```

.env files:
```bash
MONGODB_URL = 'you mongo db cluster uri'
NODE_MAILER_USER = 'nodemailer id refer nodemailer npm'
NODE_MAILER_PASS = 'nodemailer pw'
signup_Secret_Token = 'jwt signup secert key'
login_secret_token = 'jwt login secert key use google keys'
BACKEND_URL = https://localhost:4000 || 'or hosted api url'
```

```
