const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require("./routers/userRoute");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
userRoute(app);

app.get('/', (req, res) => res.send("NextDev!"));

app.listen(port, () => console.log("App rodando!"));