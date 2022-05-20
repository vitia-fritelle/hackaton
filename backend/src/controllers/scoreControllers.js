import { ObjectId } from 'mongodb';
import { parse } from 'dotenv';
import mongo from '../database';

const collection = 'UserCollection';

export async function getScore(req, res) {
    try {
        let leaderboard;
        if (req.query.hasOwnProperty('limit')) {
            const { limit } = req.query;
            leaderboard = (
                await mongo
                    .db('Hackathon02')
                    .collection(collection)
                    .find({})
                    .limit(limit)
                    .sort({ score: 1 })
                    .toArray()
            );
        } else {
            leaderboard = (
                await mongo
                    .db('Hackathon02')
                    .collection(collection)
                    .find({})
                    .sort({ score: -1 })
                    .toArray()
            );
        }
        return res.status(200).send(leaderboard);
    } catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
}

export async function postScore(req, res) {
    try {
        const user = await mongo
            .db('Hackathon02')
            .collection(collection)
            .findOne({ _id: ObjectId(req.body._id) });

        const score = user.score + parseInt(req.body.score, 10);

        await mongo
            .db('Hackathon02')
            .collection(collection)
            .updateOne({ _id: ObjectId(req.body._id) }, { $set: { score } });

        if (!user) {
            return res.status(404).send('Não foi possível localizar o usuário!');
        }
        return res.status(200).send('Pontuação contabilizada!');
    } catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
}
