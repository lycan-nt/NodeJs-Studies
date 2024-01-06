import mongoose from "mongoose";
import { Tweet, TweetSchema } from "./tweet.entity"

describe('Tweet Tests', () => {

    describe('Tests Class', () => {
        it('Should create a tweet', () => {
            const tweet = new Tweet({
                content: 'Hello World',
                screen_name: 'Felipe D. Santos'
            });
    
            expect(tweet.content).toBe('Hello World');
            expect(tweet.screen_name).toBe('Felipe D. Santos')
        });
    });


    describe('Tests Connect mongoose', () => {

        let conn: mongoose.Mongoose

        beforeEach(async () => {
            conn = await mongoose.connect(
                'mongodb://root:root@localhost:27017/tweets_entity_test?authSource=admin',);
        });

        afterEach(async () => {
            await conn.disconnect();
        });

        it('Create a tweet document', async () => {
            
            const TweetModel = conn.model('Tweet', TweetSchema);
            const tweet = new TweetModel({
                content: 'Hello World',
                screen_name: 'Felipe D. Santos'
            });
            await tweet.save();
            const tweetCreated = await TweetModel.findById(tweet._id);
            expect(tweetCreated.content).toBe('Hello World');
            expect(tweetCreated.screen_name).toBe('Felipe D. Santos');
        });
    });

})