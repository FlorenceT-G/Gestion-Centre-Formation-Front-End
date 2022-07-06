import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prospect } from 'src/app/models/Prospect';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-c-afficher-cr',
  templateUrl: './c-afficher-cr.component.html',
  styleUrls: ['./c-afficher-cr.component.css']
})
export class CAfficherCrComponent implements OnInit {

  p!:Prospect
  userString!:any
  userObject!:any

  constructor(private all:GetAllService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => this.all.getByIdProspect(params['id']).subscribe(
        result => {
          this.p = result
        }
      )
    )

    console.log(this.p.contacts)

    this.userString = sessionStorage.getItem('user')
    this.userObject = JSON.parse(this.userString);

    /*for(let c of this.p.contacts) {
      this.all.getByIdCommercial(this.userObject.idUtilisateur).subscribe(
        res => {
          c.commercial = res
        }
      )
    }*/
  }



  ajouterDate(id:number) {
    this.router.navigateByUrl("commercial-ajout-contact/" + id)
  }

  backtrack() {
    this.router.navigateByUrl('c-afficher-prospects')
  }

}
