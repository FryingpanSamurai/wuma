const express = require('express');
const cors = require('cors');
const port = 8000;
const {v4: uuidv4} = require('uuid').v4;
const { MongoClient, ObjectId } = require('mongodb');
const mongoDB = process.env.MONGODB || 'mongodb+srv://<user>:<pwd>@wuma.ufcwxgb.mongodb.net/?retryWrites=true&w=majority';
const http = require('http');
require('dotenv').config({path:'../.env'});

///////    SERVER INIT    /////////
startServer = () => {
    const app = express();
    const server = http.createServer(app);
    // const io = require('socketio')(server, {
    //     cors: {
    //         origin: "http://localhost:3000"
    //     }
    // });

    const bodyParser = require('body-parser');
    const {res, req} = require('express');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.json());
    app.use(cors());

    server.listen(port, () => {
        console.log(`Server listening on PORT ${port}`);
    });

    app.get('/blasts', async (req, res) => {
        const client = new MongoClient(mongoDB);
        try {
            await client.connect();
            const db = client.db('wumaDB');

            const temp = db.collection('blasts');
            const blasts = await temp.find({});

            const mb = await blasts.toArray();
            res.send(mb);
        } catch(e) {
            console.log(e.stack);
        } finally {
            await client.close();
        }
    });

    app.get('/users/:uid', async (req, res) => {
        const client = new MongoClient(mongoDB);
        try {
            await client.connect();
            const db = client.db('wumaDB');

            const temp = db.collection('users');
            const user = await temp.find({ '_id': ObjectId(req.params.uid) });

            const mb = await user.toArray();
            res.send(mb);
        } catch(e) {
            console.log(e.stack);
        } finally {
            await client.close();
        }
    });
}
startServer();
