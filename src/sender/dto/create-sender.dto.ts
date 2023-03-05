import {
    IsNotEmpty,
    IsString,
} from "class-validator";

export class CreateSenderDto {
    @IsString()
    @IsNotEmpty()
    ip: string;
}