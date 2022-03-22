-- ! Uncomment line 3 & 4 if you need to create a database 
-- ! to seed your data into
-- CREATE DATABASE blog_site;
-- USE blog_site;




CREATE TABLE login_credentials (
    user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_email VARCHAR(50) NULL UNIQUE,
    user_password VARCHAR(255) NULL UNIQUE 
    );
    





 INSERT INTO login_credentials
	(user_email, user_password)
 VALUES 
  ('James@gmail.com','Budafdssd'),
   ('Josephine@gmail.com','D755MARCH'),
   ('Jakedasnake@gmail.com','boozetrain'),
   ('letsgetcrackin@gmail.com','123456');