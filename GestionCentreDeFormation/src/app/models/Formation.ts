import { Formateur } from "./Formateur"
import { Participant } from "./Participant.model"

export class Formation {

    idFormation!:number
	libFormation!:String
	description!:String
	dateDebut!:Date
	dateFin!:Date
	cout!:number

	formateur!:Formateur

	//participant!:Participant[]

}