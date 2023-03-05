import {
    IsNotEmpty,
    IsString,
} from "class-validator";

export class CreateRecipientDto {
    @IsString()
    @IsNotEmpty()
    ip: string;
}