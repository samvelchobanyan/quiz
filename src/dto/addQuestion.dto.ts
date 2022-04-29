class answerOption{
    title: string;
    redirect: number;
    rate: number | null;
  }

export class newQuestionDto{
    name: string; 
    questions:answerOption[];   
}