import express from 'express';
import mongoose from 'mongoose';
import Pusher from 'pusher';
import cors from 'cors';
import todo from './todo.js';

const app = express();
const port = process.env.PORT || 9001;

const pusher = new Pusher({
  appId: '1236933',
  key: '51889b1356317c552bd2',
  secret: 'bfec78836915735cd011',
  cluster: 'ap2',
  useTLS: true,
});

app.use(express.json());
app.use(cors('*'));

// DB Config

mongoose.connect(
  'mongodb+srv://admin:buaLeU8fEMi8T5w@cluster0.kscjo.mongodb.net/whatsappdb?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// to make it realtime

const db = mongoose.connection;

db.once('open', () => {

  const todoCollection = db.collection('todos'); 
  const changeStream = todoCollection.watch();

  changeStream.on('change', (change) => {    
    
    console.log(change) ; 

    if ((change.operationType = 'insert')) {
      const todoDetails = change.fullDocument; 

      pusher.trigger('todosChannel', 'inserted', {
        title: todoDetails.title,
        desc: todoDetails.desc,
      });
    }
     else {
      console.log('Error trigerring pusher');
    }
  });
});

// API

app.get('/todos/sync', (req, res) => {
  todo.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/todos/new', (req, res) => {
  const newtodo = req.body;

  todo.create(newtodo, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(`new message created: \n ${data}`);
  });
});

app.listen(port, () => console.log(`listening on localhost:${port}`));
