const express = require('express');

const routes = express.Router();


routes.get('/',(request,response)=>{
    return response.json({
        evento:'handmade'
    });
});

module.exports = routes;