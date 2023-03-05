import {Document} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type RecipientDocument = Recipient & Document;

@Schema()
export class Recipient {
    @Prop({ required: true })
    ip: string;
}

export const RecipientSchema = SchemaFactory.createForClass(Recipient);