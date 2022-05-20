import mongo from '../database';

export const getQuestions = async (req, res) => {
    try {
        let questions;
        const { collection } = req.params;
        if (req.query.hasOwnProperty('limit')) {
            const { limit } = req.query;
            questions = (
                await mongo
                    .db('Hackathon02')
                    .collection(collection)
                    .find({})
                    .limit(limit)
                    .toArray()
            );
        } else {
            questions = (
                await mongo
                    .db('Hackathon02')
                    .collection(collection)
                    .find({})
                    .toArray()
            );
        }
        return res.status(200).send(questions);
    } catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
};

export const postQuestions = () => {};
