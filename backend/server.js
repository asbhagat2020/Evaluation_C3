const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("This is the home route");
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
