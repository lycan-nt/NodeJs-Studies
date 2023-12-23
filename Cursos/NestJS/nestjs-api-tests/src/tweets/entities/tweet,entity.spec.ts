import { Tweet } from "./tweet.entity"

describe('Tweet Tests', () => {
    it('Should create a tweet', () => {
        const tweet = new Tweet({
            content: 'Hello World',
            screen_name: 'Felipe D. Santos'
        });

        expect(tweet.content).toBe('Hello World');
        expect(tweet.screen_name).toBe('Felipe D. Santos')
    })
})