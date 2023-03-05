import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RecipientService} from "./recipient.service";
import {CreateRecipientDto} from "./dto/create-recipient.dto";
@Controller('letter')
export class RecipientController {
    constructor(private readonly senderService: RecipientService) {}

    @Post()
    create(@Body() createSenderDto: CreateRecipientDto) {
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
