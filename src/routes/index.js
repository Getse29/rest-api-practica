const { Router } = require('express');
const router = Router();

//routes
router.get('/api', (req, res) => {
  const data = {
    titulo: 'Hola mundo',
    website: 'getsemanilol29',
  };
  res.json(data);
});

module.exports = router;
