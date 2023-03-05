import {Module} from '@nestjs/common';
import {RecipientController} from './recipient.controller';
import {RecipientService} from './recipient.service';
import {MongooseModule} from '@nestjs/mongoose';
import {Sender, SenderSchema} from "../schemas/sender.schema";

@Module({
  imports: [
      MongooseModule.forFeature([
        {
          name: Sender.name,
          schema: SenderSchema
        }
      ])
  ],
  controllers: [RecipientController],
  providers: [RecipientService]
})
export class RecipientModule {}
