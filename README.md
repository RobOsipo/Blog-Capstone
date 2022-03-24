# **Welcome to Small !** 
# A blog-site like Medium, except its just a little *smaller*
## complete CRUD application inspired by the popular medium.com
©ACA-Capstone

### Where is The data to create the tables?
* located in SQL-seed-data folder, the userCredentialsSeedData.sql and blogInfoSeedData.sql files are the data needed to create the tables in mySQL workbench
* If you need to create a database inside your mySql workbench uncomment line 3 & 4 in the userCredentialsSeedData.sql file
* *The data creates the necessary tables and seeds it with only a few sets of dummy data to start*


### What's needed for the application?
* A connection to a database (steps for connection listed further down below the ERD diagram)
* A User Credentials table in your database for handling Authentication
* A blog info table in your database for storing the necessary post information

#### **Here are the current minimum tables needed for our blog displayed in an ERD**

-As you can see below we have a table called ***login_credentials*** that contains the ***user_email** column to register a user by their email,
***user_password*** which will conatin a hash encrypted version of the users password, and lastly an ***AUTO_INCREMENTing user_id*** added 
to each user as a ***PRIMARY_KEY***. *These Table will be absolutley crucial to be able to authenticatte & authorize users*

-Inside of the ***blog_info*** table we have the blogs ***post_title*** column, the blogs ***post_body***, the time the post was ***created_at***, and once again another 
***AUTOINCREMENTing*** id called ***post_id*** to give unique identifier to each post a ***PRIMARY_KEY***.


![Screenshot (20)](https://user-images.githubusercontent.com/90695804/159587222-a76fe0b9-c7f2-468a-97cb-2d861bf2f1b4.png)



## How do I make a connection to AWS (Amazon Web Services) with my mySQL Workbench???

1.  Before anything else you need to create an account on *AWS* and *mySQL* workbench if you dont already have one! 
  1. Find mySQL workbench download here - https://dev.mysql.com/downloads/workbench/ .
  2. Create account on AWS here, large orange button top right - https://aws.amazon.com/premiumsupport/knowledge-center/what-is-free-tier/ .
2. Once inside your *AWS* account search for *RDS*, then find click on the Databases tab in the left hand navigation bar.
3. Click on the large orange button *CREATE DATABASE*.
4. Click the *Standard Create* as a database creation method.
5. Under *Engine Options* You will want to select *mySQL*.
6. Under the *Templates* section select *Free Tier*.

## Now we need to change some things inside of your settings

1. Name your *DB Instance*.
2. Provide a *user name*, if the default is already admin you can leave it alone.
3. Choose a *password* you will remember!!
4. Under DB instance size, make surer that db.t2.micro is selected.
5. Under connectivity, switch Public access from No to Yes.
6. Under Additional configuration , specify an initial database name. 
7. Now click the orange button that says create database!

# Now its time to utilize the user login information and DB instance we just created and switch to mySQL workbench
* You should See something like this...

![mysql](https://user-images.githubusercontent.com/90695804/159941618-23f7eaff-9a29-44a8-9b63-ac48a44be084.png)

1. Now add your DB Instance Identifier as the connection name.
2. Let then add our hostname. We can find it in our RDS instances under the connectivity & security section labeled as endpoint.
3. In the username section put your created username, or if you left it as admin that is the place you would put it.
4. Store your password into the keychain option next to password.
5. The default schema section will be the name you decided to give your database.
6. Lastly, Test your Connection!


## You Can now load the Schemas into your mySQL Workbench from the SQLSeedData Folder in the project above
## If you are having issues you can copy and past the below SQL command into mySQL workbench














