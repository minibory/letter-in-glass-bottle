import {Module} from '@nestjs/common';
import {LetterController} from './letter.controller';
import {LetterService} from './letter.service';
import {MongooseModule} from '@nestjs/mongoose';
import {Letter, LetterSchema} from "../schemas/letter.schema";

@Module({
  imports: [
      MongooseModule.forFeature([
        {
          name: Letter.name,
          schema: LetterSchema
        }
      ])
  ],
  controllers: [LetterController],
  providers: [LetterService]
})
export class LetterModule {}
