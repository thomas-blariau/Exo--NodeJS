import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    fields : {
        Name:{Type : String},
        Email:{Type : String}
        
    },
});
export const User = mongoose.model('user', userSchema);