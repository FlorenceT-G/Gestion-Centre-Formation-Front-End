import { Reponse } from "./Reponse.model"

export class Question {

    idQuestion!:number
    question!:string
    nbBonnesReponses!:number
    explication!:string

    reponses!:Reponse[]
}