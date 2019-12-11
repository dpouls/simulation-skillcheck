create table heloUsers (
    id serial primary key,
    username varchar(20),
    password varchar(250),
    profile_pic text
);

create table heloPosts (
postId serial primary key,
title VARCHAR(45),
img text,
content text,
author_id int references heloUsers(id)
)

