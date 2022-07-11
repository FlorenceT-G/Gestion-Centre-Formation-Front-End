import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/Utilisateur.model';
import { Commercial } from '../../models/Commercial.model';
import { GetAllService } from '../../services/get-all.service';


@Component({
  selector: 'app-add-commercial',
  templateUrl: './add-commercial.component.html',
  styleUrls: ['./add-commercial.component.css']
})
export class AddCommercialComponent implements OnInit {

  commercial!:Commercial;
  uti!: Utilisateur

  constructor(private CommService : GetAllService ,  private route:ActivatedRoute, 
    private router : Router) { }

  ngOnInit(): void {
    this.commercial = new Commercial();
    this.commercial.password="1234";
  }

  SaveCommercial(){
    this.CommService.insererCommercial(this.commercial).subscribe(
      response=>{
  var obj = JSON.parse(sessionStorage['user']);
  if (obj) {
    this.uti = obj;
    if (this.uti.role.libRole === "admin") {
      this.router.navigateByUrl('admin');
    }
    else{
      this.router.navigateByUrl('afficherCommerciaux');
    }}}
  )
}

}
