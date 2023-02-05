const {Router} = require('express');
const { getOrderWithUserId } = require('../controllers/orders.controllers');


const router = Router();

router.get('/:id', getOrderWithUserId)


module.exports = router;