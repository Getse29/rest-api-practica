const { Router } = require('express');
const fetch = require('node-fetch');
const router = Router();

router.get('/', async (req, res) => {
  try {
    const resUser = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await resUser.json();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
