import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commercial } from '../models/Commercial.model';
import { GetAllService } from '../services/get-all.service';

@Component({
  selector: 'app-add-commercial',
  templateUrl: './add-commercial.component.html',
  styleUrls: ['./add-commercial.component.css']
})
export class AddCommercialComponent implements OnInit {

  commercial!:Commercial;

  constructor(private CommService : GetAllService ,  private route:ActivatedRoute, 
    private router : Router) { }

  ngOnInit(): void {
    this.commercial = new Commercial();
    this.commercial.password="1234";
  }

  SaveCommercial(){
    this.CommService.insererCommercial(this.commercial).subscribe(
      response=>{
        this.router.navigateByUrl('afficherCommerciaux');
      }
    )
  }


}
