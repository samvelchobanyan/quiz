import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { newQuestionDto } from 'src/dto/addQuestion.dto';
import { Options } from 'src/models/options.entity';
import { Questions } from 'src/models/questions.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(Questions) private QuestionRepo: Repository<Questions> ,
        @InjectRepository(Options) private OptionRepo: Repository<Options> 
    ){}

    findAll(): Promise<Questions[]>{
        return this.QuestionRepo.find();
    }

    findQuestion(id): Promise<Options[]>{
        return this.OptionRepo.find({quiestion:id});
    }

    saveQuestion(questionData: newQuestionDto){
        console.log(questionData);
        this.QuestionRepo.save(questionData);
    }
}