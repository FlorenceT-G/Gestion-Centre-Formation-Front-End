import { Component, OnInit } from '@angular/core';
import { Formateur } from 'src/app/models/Formateur';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {


  constructor(private service:GetAllService) { }

  ngOnInit(): void {
  }
}
