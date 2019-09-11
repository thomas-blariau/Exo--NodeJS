import { Movie } from './movie.model';


export const search = async (req, res) => {
    try {
        const movieSearch = await Movie.find(req.query);
        // if (!movie) return res.status(400).end();
        res.status(200).json({ movie:movieSearch });
        // console.log(movie)

    } catch (err) {
        console.log(err);
        res.status(400).end();

    }
}
