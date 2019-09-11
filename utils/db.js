import mongoose from 'mongoose';
// import {url} from 'inspector';

export const connect =(url = '/mongodb://@localhost:27017/technocite', opts={})=>{
    return mongoose.connect(
        url,
        {...opts, useNewUrlParser: true}
    )
}