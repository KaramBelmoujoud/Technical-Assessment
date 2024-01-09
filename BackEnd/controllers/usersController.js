// controllers/usersController.js
const fetch = require('node-fetch');

const apiUrl = process.env.API_URL || 'https://dummyjson.com/users';
async function getUsers(req, res) {
    try {
        const response = await fetch(apiUrl) ;

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
async function deleteUser(req, res) {
    try {
        console.log(req.params.value);
        const response = await fetch(apiUrl + '/' + req.params.value);
        

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getUser(req, res) {
    try {
        console.log(req.params.value);
        const response = await fetch(apiUrl + '/' + req.params.value);
        

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { getUsers, deleteUser, getUser };
