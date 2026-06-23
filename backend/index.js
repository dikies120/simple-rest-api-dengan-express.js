const express = require("express");
const routerUsers = require("./router/users.js");
const routerProduct = require("./router/product.js");
const middleware = require("./middleware/logs.js");

const app = express();

app.use(middleware);
app.use("/users", routerUsers);
app.use("/products", routerProduct);

app.listen(4000, ()=>{
    console.log("server jalan di port 4000");
})
