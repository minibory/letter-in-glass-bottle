import {
    IsNotEmpty,
    IsString,
    IsNumber,
} from "class-validator";
import {Sender} from "../../schemas/sender.schema";
import {Recipient} from "../../schemas/recipient.schema";

export class CreateLetterDto {
    @IsNotEmpty()
    sender: Sender;

    @IsNotEmpty()
    recipient: Recipient;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsNumber()
    @IsNotEmpty()
    views: number;

    @IsNumber()
    @IsNotEmpty()
    upvote: number;

    @IsNumber()
    @IsNotEmpty()
    downvote: number;
}