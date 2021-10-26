import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fulldetails',
  templateUrl: './fulldetails.component.html',
  styleUrls: ['./fulldetails.component.scss']
})
export class FulldetailsComponent implements OnInit {
  order:any;
  params:any;
  public result: any;

  constructor(private _route:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this._route.snapshot.paramMap.get("id");
    this.result=id
      
    }
    
  }

 
