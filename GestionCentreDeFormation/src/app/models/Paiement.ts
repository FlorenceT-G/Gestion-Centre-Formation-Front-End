import { Formateur } from "./Formateur"
import { Formation } from "./Formation"
import { Participant } from "./Participant.model"

export class Paiement {

    idPaiement!:number
	datePaiement!:Date
	reste!:number
	montant!:number

	participant!:Participant
	formation!: Formation
}