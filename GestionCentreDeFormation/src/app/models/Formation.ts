import { Formateur } from "./Formateur"
import { Participant } from "./Participant.model"
import { Quiz } from "./Quiz.model"

export class Formation {

    idFormation!:number
	libFormation!:String
	description!:String
	dateDebut!:Date
	dateFin!:Date
	cout!:number
	formateur!:Formateur


	listeParticipants!:Participant[]
	listeQuiz!:Quiz[]

}