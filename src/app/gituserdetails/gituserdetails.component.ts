import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GraphsService } from '../graphs.service';

@Component({
  selector: 'app-gituserdetails',
  templateUrl: './gituserdetails.component.html',
  styleUrls: ['./gituserdetails.component.scss']
})
export class GituserdetailsComponent implements OnInit {
  // res: any;
  res:any = [];
  constructor(private servicefile:GraphsService ,private activate:ActivatedRoute) { }
 
  ngOnInit(): void {
    const snap=this.activate.snapshot.paramMap.get("login") || '';
    console.log(snap , "snapshot value");
    this.getprifile(snap)
    

    // const snap = this.activate.snapshot.paramMap.get('login') || " ";
    // console.log(snap);

  // this.getprifile(snap);
  // }
  // getprifile(snap:any){
  //   this.servicefile.getuserinfo(snap).subscribe((data)=>{
  //     this.res=data;

  //     console.log(this.res);
      

  //   })
  }
  getprifile(snap:any){
    this.servicefile.getuserinfo(snap).subscribe((data)=>{
      console.log(data);
      this.res=data;
      
    })
  }

}
