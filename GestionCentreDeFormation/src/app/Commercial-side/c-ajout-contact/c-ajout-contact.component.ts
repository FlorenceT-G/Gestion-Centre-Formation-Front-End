import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commercial } from 'src/app/models/Commercial.model';
import { Contact } from 'src/app/models/Contact';
import { Prospect } from 'src/app/models/Prospect';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-c-ajout-contact',
  templateUrl: './c-ajout-contact.component.html',
  styleUrls: ['./c-ajout-contact.component.css']
})
export class CAjoutContactComponent implements OnInit {

  p!:Prospect
  auj!:number
  commercialString!:any
  commercialObjet!:Commercial

  contact = new Contact()

  constructor(private all:GetAllService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => this.all.getByIdProspect(params['id']).subscribe(
        result => {
          // console.log(result)
          this.p = result
          // console.log("---")
          // console.log(this.p)
        }
      )
    )

    this.commercialString = sessionStorage.getItem('user')
    this.commercialObjet = JSON.parse(this.commercialString)
    this.auj =Date.now() 
  }

  valider() {
    this.contact.commercial = this.commercialObjet;
    this.contact.prospect = this.p;

    console.log(this.contact)

    this.all.insererContact(this.contact, this.p.idProspect, this.commercialObjet.idUtilisateur).subscribe(
      res => this.backtrack()
    )
  }

  backtrack() {
    this.router.navigateByUrl('c-gestion-prospects')
  }

}
