import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurdService } from '../curd.service';

@Component({
  selector: 'app-tabletask',
  templateUrl: './tabletask.component.html',
  styleUrls: ['./tabletask.component.scss']
})
export class TabletaskComponent implements OnInit {

  tabledata: any
  data: any;
  row: any;

  constructor(private tableservice: CurdService, private _router: Router) { }

  ngOnInit(): void {
    this.getdata()

  }

  getdata() {
    this.tableservice.getTableData().subscribe((data) => {
      console.log(data, "geiing data in ts file");
      this.tabledata = data
    })
  }
  deletedata(data: any) {
   
    console.log(data.id, "ts id");
    this.tableservice.deletedata(data).subscribe((data1) => {
      console.log(data1, "delete data ts file");
    })
   
    this.getdata()
  }
  editdata(){
    
  }


}
