import {Module} from '@nestjs/common';
import {SenderController} from './sender.controller';
import {SenderService} from './sender.service';
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
  controllers: [SenderController],
  providers: [SenderService]
})
export class SenderModule {}
