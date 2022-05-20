import mongo from '../database';

export const getQuestions = async (req, res) => {
    try {
        let questions;
        if (req.query.hasOwnProperty('limit')) {
            const { limit } = req.query;
            questions = (
                await mongo
                    .db('Hackathon02')
                    .collection('NodejsCollection')
                    .find({})
                    .limit(limit)
                    .toArray()
            );
        } else {
            questions = (
                await mongo
                    .db('Hackathon02')
                    .collection('NodejsCollection')
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
