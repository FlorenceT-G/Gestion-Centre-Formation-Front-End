import { Formation } from "./Formation"
import { Question } from "./Question.model"

export class Quiz {

    idQuiz!:number
    nbQuestion!:number
    pourcentage!:number

    questions!:Question[]

    // ignoré en back
    formation!:Formation
}

