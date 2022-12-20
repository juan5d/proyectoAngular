import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RegistService } from 'src/app/services/regist.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  formulario: FormGroup;
  id:any;
  
  constructor(private registService: RegistService, private _route:ActivatedRoute) {
    this.id=this._route.snapshot.paramMap.get('id');
this.formulario=new FormGroup({
  idR: new FormControl(),

  name: new FormControl()
})

  }
  ngOnInit(): void {
  }
  async onSubmit() {
    console.log(this.formulario.value);
    const resp = await this.registService.editRegist(this.id,this.formulario.value);
    console.log(resp);
  }
}