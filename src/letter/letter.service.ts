import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Letter, LetterDocument} from "../schemas/letter.schema";
import {Model} from "mongoose";
import {CreateLetterDto} from "./dto/create-letter.dto";
import {UpdateLetterDto} from "./dto/update-letter.dto";

@Injectable()
export class LetterService {
    constructor(@InjectModel(Letter.name) private readonly letterModel: Model<LetterDocument>) {}

    async create(createLetterDto: CreateLetterDto): Promise<LetterDocument> {
        const letter = new this.letterModel(createLetterDto);
        return await letter.save();
    }

    async findAll(): Promise<LetterDocument[]> {
        return this.letterModel.find();
    }

    findOne(id: string) {
        return this.letterModel.findById(id);
    }

    async update(id: string, updateLetterDto: UpdateLetterDto): Promise<LetterDocument> {
        return this.letterModel.findByIdAndUpdate(id, updateLetterDto);
    }

    async remove(id: number) {
        return this.letterModel.findByIdAndRemove(id);
    }
}
