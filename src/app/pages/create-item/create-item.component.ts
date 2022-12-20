import { RegistService } from '../../services/regist.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {
  formulario: FormGroup;
  
  constructor(private registService: RegistService) {
this.formulario=new FormGroup({
  idR: new FormControl(),

  name: new FormControl()
})

  }
  ngOnInit(): void {
  }
  async onSubmit() {
    console.log(this.formulario.value);
    const resp = await this.registService.addRegist(this.formulario.value);
    console.log(resp);
  }
}
