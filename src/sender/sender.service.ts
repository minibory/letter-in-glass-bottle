import {Injectable, Ip} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateSenderDto} from "./dto/create-sender.dto";
import {Sender, SenderDocument} from "../schemas/sender.schema";
import {request} from "express";

@Injectable()
export class SenderService {
    constructor(@InjectModel(Sender.name) private readonly senderModel: Model<SenderDocument>) {}

    async create(createSenderDto: CreateSenderDto): Promise<SenderDocument> {
        const sender = new this.senderModel(createSenderDto);
        sender.ip = request.ip;
        return await sender.save();
    }

    async findAll(): Promise<SenderDocument[]> {
        return this.senderModel.find();
    }

    findOne(id: string) {
        return this.senderModel.findById(id);
    }
}
