import { RegistService } from '../../services/regist.service';
import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/model/registro';

@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.scss']
})
export class ViewTodosComponent implements OnInit {
  registro: Registro[];
  constructor(private registService:RegistService) {
    this.registro=[{
      idR:'',
      name:''
    }]
   }

  ngOnInit(): void {
    this.registService.getRegist().subscribe( regist =>{
      console.log(regist);
      this.registro=regist;
    })
  }

}
