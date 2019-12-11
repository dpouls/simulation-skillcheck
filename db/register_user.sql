insert into heloUsers (
    username,
    password
) values (
    ${username},
    ${hash}
)
returning id, username;