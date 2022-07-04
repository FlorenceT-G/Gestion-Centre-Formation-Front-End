import { Role } from "./Role.model";

export class Utilisateur{

    idUtilisateur!: number;
    nom!: string;
	prenom!: string;
	adresseMail!: string;
	username!: string;
	password!: string;

	role!:Role;

	


}