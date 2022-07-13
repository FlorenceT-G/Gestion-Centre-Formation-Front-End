import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commercial } from 'src/app/models/Commercial.model';
import { Utilisateur } from 'src/app/models/Utilisateur.model';
import { GetAllService } from '../../services/get-all.service';

@Component({
  selector: 'app-modif-commercial',
  templateUrl: './modif-commercial.component.html',
  styleUrls: ['./modif-commercial.component.css']
})
export class ModifCommercialComponent implements OnInit {

  uti!: Utilisateur;
  commercial!:Commercial;

  constructor(private router: Router, private CommService: GetAllService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.commercial=new Commercial();
    this.getCommercial();
  }

  SaveCommercial(){
    this.CommService.modifierCommercial(this.commercial).subscribe();
  var obj = JSON.parse(sessionStorage['user']);
  if (obj) {
    this.uti = obj;
    if (this.uti.role.libRole === "admin") {
      this.router.navigateByUrl('admin');
    }
    else{
      this.router.navigateByUrl('afficherCommerciaux')
    }}
}

  getCommercial(){
    const id=+this.route.snapshot.params['id'];
    this.CommService.getByIdCommercial(id).subscribe(
      response => {
        this.commercial=response});
  }

}
