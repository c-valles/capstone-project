//Importing...
import express from "express";
import Users from "../Models/Users.js";

const router = new express.Router();

/**
 * GET /users/
 * get all users
 */

router.get('/', async (req, res) => {
    try {
     const users = await Users.find();
     res.send(users);
    } catch (error) {
     console.log(error);
    }
 });

 /**
 * POST /users/
 * Create a new user
 */

router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const user = await Users.create(req.body);
        res.send(user);
        // res.json(user).status(203);

    } catch (error) {
        console.log(error);
    }
});

/**
 * GET /user/:id
 * Get user by id
 */

router.get('/:id', async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        if (!user) {
            res.send("User not found!")
        }
        res.send(user);
    } catch (error) {
        console.log(error);
        res.send({error: 'Error, invalid data.'})
    }
});

router.delete(':/id', async (req, res) => {
 try {
    const deletedUser = await Users.FindByIdAndDelete(req.params.id);
    res.send({
        deletedUser: deletedUser,
        message: 'User deleted!'
    })
 } catch (error) {
    console.log(error);
    res.send({Error: 'Error, invalid data!'})
 }
});

/**
 * PUT /user/:id
 * Updates an user
 */
router.put('/:id', async (req, res) => {
    try {
        const usernameTaken = await Users.findOne({username: req.body.username});
        console.log(usernameTaken);

        if(usernameTaken) {
            return res.send('username not available!');
        }
        const updatedUser = await Users.findByIdandUpdate(req.params.id, req.body, {newe: true});
        res.send(updatedUser);
    } catch (error) {
        console.log(error);
        res.send({error: 'Error, invalid data!'});
    }
})

/**
 * POST /auth/signup
 * register a new user
 */
router.post('/signup', async (req, res) => {
    try {
        const emailInUse = await Users.findOne({email: req.body.email});

        if (emailInUse) {
            return res.send('Email in use!');
        }

        const user = await Users.create(req.body);
        res.send(user);
    } catch (error) {
        console.log(error);
    }
});

router.post('/signin', async (req, res) => {
    try {
        const dbuser = await Users.findOne({email: req.body.email});

        if (!dbuser) {
            return res.send('Check your email!');
        }

        if (dbuser.password != req.body.password) {
            return res.send('Check credentials!');
        }
        res.send(dbuser);
    } catch (error) {
        console.log(error);
    }
});

//Exporting...
export default router;