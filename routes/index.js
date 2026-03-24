const router = require('express').Router();

const swaggerRouter = require('./swagger');


router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Hello World!');
});

router.use('/', swaggerRouter);

router.use('/contacts', require('./contacts'));

module.exports = router;