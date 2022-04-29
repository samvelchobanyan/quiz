import { Body, Controller, Get, Post } from '@nestjs/common';
import { newQuestionDto } from 'src/dto/addQuestion.dto';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
    constructor(private questioService: QuestionService){}

    @Get()
    getQuestions() :string{
        return 'all questions';
    }

    @Post('add')
    AddQuestion(@Body() newQuestion: newQuestionDto){
        // console.log(newQuestion);
        const arr = newQuestion.questions;
        console.log(newQuestion);
        // const optObj = JSON.parse(arr[0]);
        console.log(arr[0].title)
    }
}
