import { RegistService } from './../../services/regist.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Registro } from 'src/app/model/registro';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnDestroy, OnInit {
  registro!: Registro[];
  dtOptions: DataTables.Settings = {};

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private registService: RegistService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      serverSide: true,
      processing: true,
    };
    this.registService.getRegist().subscribe(regist=>{
      console.log(regist);
      this.registro=regist;
      this.dtTrigger.next(regist);
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  async onclickDelete(registro:Registro){
await this.registService.deleteRegist(registro)
  }
}
