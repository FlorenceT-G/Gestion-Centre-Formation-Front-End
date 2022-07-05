import { Commercial } from "./Commercial.model";
import { Prospect } from "./Prospect";

export class Contact {
    idContact!:number;
    compteRendu!:string;
    dateContact!:Date;

    prospect!:Prospect;

    commercial!:Commercial;
}