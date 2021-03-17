const { Router } = require('express');
const router = Router();

/** Another method to call for router

const express = require(express);
const router = express.router();
router.get('/', (req, res) => {
    res.json({"name":"Jhon Doe 2"});
});

**/
router.get('/', (req,res) => {
    const data = {
        "name":"Jhon Doe",
        "id":"1234"
    }
    res.json(data);
})

module.exports = router;