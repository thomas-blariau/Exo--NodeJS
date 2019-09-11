import express from 'express';
import {json, urlencoded} from 'body-parser';
import {connect} from './utils/db';
import {search} from './ressources/movies/search.controller';
import movieRouter from './ressources/movies/movie.router';
import router from './ressources/users/users.router';
const app = express();


// permet de "cacher" le langage utilisé des hackers
app.disable('x-powered-by');

// nécessaire au body-parser
app.use(json());
app.use(urlencoded({ extended:true }));
app.use('/search', search)
app.use('/api/movies', movieRouter);
app.use('/api/users', router);

const start = async()=>{
    try { 
        await connect()
    app.listen(8001,()=>{
        console.log('REST API listening on port 8001');
    })}catch(err){
        throw err;
    }
}

start();