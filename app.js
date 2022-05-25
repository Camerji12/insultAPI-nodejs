const axios = require('axios');
const fs = require('fs');
const express = require('express');
app = express();

app.get("/", (req, res) => {
    axios
        .get("https://insults.tr00st.co.uk/your_mom/")
        .then(response => {
            // console.log(response.data);
            fs.readFile(__dirname + "/index.html", "utf8", function(error, html){
                html = html.split('[insult]').join(`<h3>${response.data}</h3>`);
                res.send(html);
            })
        }).catch(err => {
            console.error(err);
        })
})

app.listen(8080, () => {
    console.log("Running...");
})