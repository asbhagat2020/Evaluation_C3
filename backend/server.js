const app = require("./app");
const dotenv = require("dotenv");

<<<<<<< HEAD
dotenv.config();

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("This is the home route");
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
=======

dotenv.config();



const port = process.env.PORT || 3001


app.get("/", (req, res)=>{
    res.send("this is the home route");
})

app.listen(port, ()=>{

    console.log(`server is running at port ${port}`);
})
>>>>>>> fa72693562cd341495212a4396c13594fa57af03
