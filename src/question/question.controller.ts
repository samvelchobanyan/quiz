import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { newQuestionDto } from 'src/dto/addQuestion.dto';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
    constructor(private questioService: QuestionService){}

    @Get()
    async getQuestions(){
        return this.questioService.findAll();
    }

    @Get(':id')
    async getQuestion(@Param('id') id:string){
        return this.questioService.findQuestion(id);
    }

    @Post('add')
    AddQuestion(@Body() newQuestion: newQuestionDto){
        const arr = newQuestion.questions;
        this.questioService.saveQuestion(newQuestion);
        // console.log(newQuestion);
        // console.log(arr[0].title)
    }
}
