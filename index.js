let express = require("express");
let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let sheetValues = {
  FYCS: "FYCS_SHEET_ID",
  SYCS: "SYCS_SHEET_ID",
  TYCS: "TYCS_SHEET_ID",
};

app.get("/value", (req, res) => {
  let course = req.query.course;
  let inputValue = sheetValues[course];
  res.json({ sheet_value: inputValue });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
