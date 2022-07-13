import { Question } from "./Question.model"

export class Reponse {

    idReponse!:number
    reponse!:string
    vrai!:boolean

    question!:Question
}