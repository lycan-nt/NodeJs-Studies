import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TweetDocument = Tweet & Document;

export type TweetProps = {
    content: string;
    screen_name: string;
}

@Schema()
export class Tweet {
    
    @Prop({ required: true })
    content: string;
    @Prop({ required: true })
    screen_name: string;
    
    constructor(props: TweetProps) {
        Object.assign(this, props)
    }

}

export const TweetSchema = SchemaFactory.createForClass(Tweet);
