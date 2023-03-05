import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type LetterDocument = Letter & Document;

@Schema({
    timestamps: { createdAt: 'created' },
})
export class Letter {
    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    views: number;

    @Prop()
    upvote: number;

    @Prop()
    downVote: number;
}

export const LetterSchema = SchemaFactory.createForClass(Letter);