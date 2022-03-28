


CREATE TABLE blog_info (
    post_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    post_title VARCHAR(255) NOT NULL,
    post_body TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    



 INSERT INTO blog_info
	(post_title, post_body)
 VALUES 
  ('A land of code','Blahblahblahblahblah'),
   ('stuff for stuff with stuff','this stuff is stuff that stuff has stuff else stuff'),
   ('Things my kid told me', 'once upon a time I did a thing! What a magnificent thing it was! And MY kid started it all...');


   ALTER TABLE `blog_site`.`blog_info` 
ADD CONSTRAINT `fk_user_id`
  FOREIGN KEY (`user_id`)
  REFERENCES `blog_site`.`login_credentials` (`user_id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION;