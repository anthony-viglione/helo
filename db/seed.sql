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