const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {

        const {username, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        // console.log('q', req)
        let user = await db.check_user(username);
        user = user[0];
        if(user){
            return res.status(400).send('User already exists')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        // console.log(salt,hash)
        let newUser = await db.register_user({username, hash});
        // console.log(newUser)
        newUser = newUser[0];
        session.user = newUser;
        res.status(201).send(session.user);
    },
    getUser: (req, res) => {
        if(req.session.user){
            res.status(200).send(req.session.user);
        } else {
            res.status(200).send('');
        }
    },
    login: async(req, res) => {
        const {username, password, profile_pic} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        // console.log(req.session)
        let user = await db.check_user(username);
        user = user[0];
        if(!user){
            return res.status(400).send('Username not found')
        }

        const authenticated = bcrypt.compareSync(password, user.password);
        if(authenticated){
            delete user.password;
            session.user = user;
            res.status(202).send(session.user);
        } else {
            res.status(401).send('Incorrect Password')
        }
    },

    getPosts: (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db')
        db.get_posts(id).then(posts => {
            res.status(200).send(posts) 
        }).catch(err => res.status(500).send(err))
    }

}