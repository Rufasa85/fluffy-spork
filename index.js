const express = require("express");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
