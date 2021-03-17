const { Router } = require('express');
const router = Router();

/** Another method to call for router

const express = require(express);
const router = express.router();

**/
router.get('/', (req, res) => {
    res.json({"name":"Jhon Doe 2"});
});

module.exports = router;