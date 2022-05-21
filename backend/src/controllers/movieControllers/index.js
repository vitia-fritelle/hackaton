import mongo from '../../database';

export const getMovies = async (req, res) => {
    try {
        let movies;
        const collection = 'VideoCollection';
        if (req.query.hasOwnProperty('limit')) {
            const { limit } = req.query;
            movies = (
                await mongo
                    .db('Hackathon02')
                    .collection(collection)
                    .find({})
                    .limit(limit)
                    .toArray()
            );
        } else {
            movies = (
                await mongo
                    .db('Hackathon02')
                    .collection(collection)
                    .find({})
                    .toArray()
            );
        }
        return res.status(200).send(movies);
    } catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
};

export const postMovies = () => {};
