import { Participant } from "./Participant.model"
import { Quiz } from "./Quiz.model"

export class Score {

    idScore!:number
    score!: number

    quiz!:Quiz
    participant!:Participant
}