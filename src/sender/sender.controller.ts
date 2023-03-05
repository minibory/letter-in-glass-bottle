import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {SenderService} from "./sender.service";
import {CreateSenderDto} from "./dto/create-sender.dto";
@Controller('sender')
export class SenderController {
    constructor(private readonly senderService: SenderService) {}

    @Post()
    create(@Body() createSenderDto: CreateSenderDto) {
        return this.senderService.create(createSenderDto);
    }

    @Get()
    findAll() {
        return this.senderService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.senderService.findOne(id);
    }
}
