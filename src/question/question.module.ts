import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Options } from 'src/models/options.entity';
import { Questions } from 'src/models/questions.entity';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';

@Module({
  controllers: [QuestionController],
  providers: [QuestionService],
  imports: [TypeOrmModule.forFeature([Options,Questions])]
})
export class QuestionModule {}
