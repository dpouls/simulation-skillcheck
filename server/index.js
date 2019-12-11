require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      ctrl = require('./controller'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      gradient = require('gradient-string'),
      app = express();

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60},
    secret: SESSION_SECRET 
}))


massive(CONNECTION_STRING).then(
    db => {
        app.set('db',db)
        console.log(gradient.teen('Daterbase connected'))
    }
)

//Endpoints

app.post('/api/register', ctrl.register)
app.post('/api/login', ctrl.login)
// posts
app.get('/api/posts/:id', ctrl.getPosts)





app.listen(SERVER_PORT, () => console.log(gradient.morning(`server rootin' and tootin' on port ${SERVER_PORT}`)))
