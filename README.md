# **Small!** A blog-site like Medium, except its just a little *smaller*
## complete CRUD application inspired by the popular medium.com
©ACA-Capstone

### Where is The data to create the tables?
* located in the userCredentialsSeedData.sql and blogInfoSeedData.sql files are the data needed to create the tables in mySQL workbench
* If you need to create a database inside your mySql workbench uncomment line 3 & 4 in the userCredentialsSeedData.sql file
* *The data creates the necessary tables and seeds it with only a few sets of dummy data to start*

### What's needed for the application?
* A connection to a database (steps for connection listed further down)
* A User Credentials table in your database for handling Authentication
* A blog info table in your database for storing the necessary post information

**Here are the current minimum tables needed for our blog displayed in an ERD**
  As you can see below we have a table called login_credentials that contains the user_email to register a user by their email,
a a user_password which will conatin a hash encrypted version of the users password, and lastly an AUTO_INCREMENTing id added to each user as a PRIMARY_KEY


![Screenshot (20)](https://user-images.githubusercontent.com/90695804/159587222-a76fe0b9-c7f2-468a-97cb-2d861bf2f1b4.png)
