import express from "express";
import { cafeRoutes } from "../routes/cafe-routes.js";

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(cafeRoutes);

const PORT = process.env.PORT || 3000;

try {
    app.listen(PORT, () => {
        console.log(`Listening on port : ${PORT}`);
    })
} catch (error) {
    console.log(`Error while listening on ${PORT}`);
}