# PROJECT TESTING
pull this project to a directory

cd to the project directory in your terminal

run npm install

cd to client directory in the project directory

run npm install

start your mysql server

look for dbcom.js in the root project directory

edit line 12 - 15 to suit your database configuration

if your installation is done run "npm run dev"

After "npm run dev" is executed, look for index.js in the root project directory

set line 11 to false to create tables in database

#To Test Project in Production

cd to client directory in your root folder

run "npm run build"

#EMAIL SETUP

Look for mailer.js file in the root project folder

Edit code to suit your email configuration

go to dbcom.js, uncomment line 107 - 110 to enable email sending for email verification

#PAYMENT SETUP

Look for payment.js file in the root project folder.

Edit or rewrite code to suit your payment gateway

Payment module is used in dbcom.js file, in line 987 - 990 and line 1156 - 1159

You can change the code to suit your payment gateway integration code

Cheers and happy launch
