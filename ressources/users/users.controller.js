import { User } from './users.model';


export const userList = async (req, res) => {
    try {
        const users = await User.find();
        if (!users) return res.status(400).end();
        res.status(200).json({ user: users });

    } catch (err) {
        console.log(err);
        res.status(400).end();

    }
}

export const createUser = async (req, res) => {
    try {
        const users = await User.create({...req.body});
        res.status(200).json({ user: users });

    } catch (err) {
        console.log(err);
        res.status(400).end();

    }
}






