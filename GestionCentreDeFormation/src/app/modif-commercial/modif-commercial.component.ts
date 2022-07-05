import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commercial } from '../models/Commercial.model';
import { GetAllService } from '../services/get-all.service';

@Component({
  selector: 'app-modif-commercial',
  templateUrl: './modif-commercial.component.html',
  styleUrls: ['./modif-commercial.component.css']
})
export class ModifCommercialComponent implements OnInit {

  commercial!:Commercial;

  constructor(private router: Router, private CommService: GetAllService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.commercial=new Commercial();
    this.getCommercial();
  }

  SaveCommercial(){
    this.CommService.modifierCommercial(this.commercial).subscribe();
    this.router.navigateByUrl('afficherCommerciaux')
  }

  getCommercial(){
    const id=+this.route.snapshot.params['id'];
    this.CommService.getByIdCommercial(id).subscribe(
      response => {
        this.commercial=response});
  }

}
