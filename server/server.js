const express = require('express');
const mongoose = require('mongoose');
const config = require("config");
const content = require("./routes/api/content");
const path = require("path");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;


class Server {
    constructor() {
        this.initMiddlewares();
        this.initStaticFiles();
        this.initDB();
        this.initRoutes();
        this.start();
    }

    initMiddlewares(){
        
        app.use(cors());
        app.use(fileUpload());
        app.use(express.json());
    }

    initStaticFiles(){
        app.use(express.static(path.resolve(__dirname, "../dist")));
    }

    initDB(){
        mongoose.connect(config.get("mongodbURL"),
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
            }).then(() => {
                console.log("Database Connected to ResturantBlog")
            }).catch(err => console.log("connection error occured:", err))
    }

    initRoutes(){

        app.use("/api/data", content)

        app.get("*", (req, res) => {
            res.sendFile(path.resolve(__dirname, "../dist/index.html"))
        })
    }

    start(){
        app.listen(port, () => console.log(`app listening on port ${port}`));
    }

}

new Server();


