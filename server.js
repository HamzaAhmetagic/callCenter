const express = require("express");
const app = express();
const routs = require("./routs");


app.set("view engine", "ejs");
app.use("/", routs);








// var birds = require("./birds")
// app.get("/", (req, res) => {
//     let person = {
//         name: "Danilo"
//     }
//     res.render("index", { person: person });
// })
// app.get("/users/:id", (req, res) => {
//     let id = req.params.id
//     let names = ["Hamza", "Danilo"];
//     let user = names[id];
//     res.render("users", { user: user });
// })

// app.use("/birds", birds)

// app.get("/", (req, res) => {
//     res.send("Homepage");
// })





app.listen(3000, () => {
    console.log('server pokrenut');
})