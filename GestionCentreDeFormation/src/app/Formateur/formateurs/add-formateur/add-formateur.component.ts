import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/models/Formateur';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent implements OnInit {

  formateur!:Formateur

  constructor(private service:GetAllService, private router:Router) { }

  ngOnInit(): void {
    this.formateur = new Formateur()
    this.formateur.password="1234"
  }

  saveFormateur() {
    this.service.insererFormateur(this.formateur).subscribe(
      response => this.router.navigateByUrl("afficherFormateurs")
    )
  }

}
