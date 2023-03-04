import {
    IsNotEmpty,
    IsString,
    IsNumber,
    MaxLength,
    MinLength,
} from "class-validator";

export class CreateLetterDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsNumber()
    @IsNotEmpty()
    views: number;
}