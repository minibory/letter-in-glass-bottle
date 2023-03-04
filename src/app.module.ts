import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from '@nestjs/mongoose';
import { LetterModule } from './letter/letter.module';

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true
      }),
      MongooseModule.forRoot(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      }),
      LetterModule
  ],
  controllers: [],
})
export class AppModule {}
