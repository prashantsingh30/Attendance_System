let express = require("express");
let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/value", (req, res) => {
    const inputValue = req.query.sheet_value;
    res.send(inputValue);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
