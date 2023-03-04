import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type LetterDocument = Letter & Document;

@Schema({
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Letter {
    @Prop({ required: true })
    id: string;

    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    views: number;
}

export const LetterSchema = SchemaFactory.createForClass(Letter);