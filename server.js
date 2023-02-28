const express = require('express');
const app = express();
const port = 3000;

// hero and villain routes
const hero_routes = require("./routes/hero")
const villain_routes = require('./routes/villain')

const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.use("/hero", hero_routes)
app.use("/villain", villain_routes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})