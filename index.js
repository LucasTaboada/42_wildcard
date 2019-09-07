const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8081;


app.use(bodyParser.json());

app.listen(PORT,()=>
{
    console.log(`Server is running on port ${PORT}`);   
});