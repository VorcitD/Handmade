const express = require('express');

const app = express();

app.get('/',(request,response)=>{
    return response.json({
        evento:'handmade'
    });
});

app.listen(3333);