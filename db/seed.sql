--table creation
CREATE TABLE helo_users(
    id serial primary key,
    username varchar(20),
    password varchar(20),
    profile_pic text
    );

CREATE TABLE helo_posts(
    id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id integer references helo_users (id)
    );

-- Dummy Data first row
INSERT INTO helo_users (username,password,profile_pic)
VALUES ('anthony_test1', 'test1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4fWYG100DfpNDQJYzvlbF6eDr4zjY-QOd1GJAXqus-I5CSRt');
SELECT * FROM helo_users;

INSERT INTO helo_posts(title, img, content, author_id)
VALUES ('first post', 'this is the first post; this is a test', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/SuccessKid.jpg/256px-SuccessKid.jpg',1);
SELECT * FROM helo_posts;