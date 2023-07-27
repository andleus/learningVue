import express from "express";
import path from 'path';
import { fileURLToPath } from "url";
import morgan from "morgan";
import router from "./routes/tasks.js";
import mongoose from "mongoose";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
mongoose.connect('mongodb://localhost:27018/learning-vue')
    .then(db => console.log('DB -> ¡Connected!'))
    .catch(err => console.error('DB -> Not connected...',err));

app.use(morgan('dev'));
app.use(express.json());





app.set('port', process.env.PORT || 3000);




app.use('/tasks', router);

app.use(express.static(`${__dirname}/public`));


app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})