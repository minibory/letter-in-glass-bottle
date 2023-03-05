import {Document} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type SenderDocument = Sender & Document;

@Schema()
export class Sender {
    @Prop({ required: true })
    ip: string;
}

export const SenderSchema = SchemaFactory.createForClass(Sender);