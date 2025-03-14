import express from "express";
import { engine } from "express-handlebars";
import bodyParser from "body-parser";
import todoRoutes from "./routes/todoRoutes";
import path from "path";
import Handlebars from "handlebars";


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

Handlebars.registerHelper("eq", (a, b) => a === b);

app.engine("hbs", engine({ extname: "hbs", defaultLayout: "main" }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use('/', todoRoutes);

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

module.exports = app;