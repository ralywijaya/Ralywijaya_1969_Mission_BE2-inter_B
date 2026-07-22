const express = require("express");
const cors = require("cors");

const userRoute = require("../routes/user.route");
const movieRoute=require("../routes/movie.route")
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/user", userRoute);
app.use("/movie", movieRoute);

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});


// untuk demo pastikan menggunakan url ini
// http://localhost:3000/user untuk get,dan post
// http://localhost:3000/user/:id untuk delete,put pastikan menggunakan req params untuk id