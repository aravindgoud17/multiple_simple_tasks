import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GraphsService } from '../graphs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curd-form',
  templateUrl: './curd-form.component.html',
  styleUrls: ['./curd-form.component.scss']
})
export class CurdFormComponent implements OnInit {

  p: number = 1; //pagination starting number
  gitquerylist: any;
  datas: any;
  filterlist: any;
  id: any;
  githubprofile: any;
  ress: any;
  information: any;
  filterlist1: any;


  profileForm = new FormGroup({
    firstName: new FormControl(''),
    age: new FormControl(''),
    searchbox: new FormControl(''),
  })

  profileForm1 = new FormGroup({
    box: new FormControl(''),
    //   id:new FormControl(''),
    //   avatar_url:new FormControl(''),
    //   followers_url:new FormControl(''),
    //   following_url:new FormControl(''),
    //   repos_url:new FormControl(''),
  })


  onSubmit() {
    console.log(this.profileForm.value);
  }

  constructor(private graphdata: GraphsService, private _router: Router) {

  }

  myfun(item: any) {
    // alert("hello")
    this._router.navigate(['/fulldetails', item.id]);
  }


  searchUser() {
  }

  
  moredetails(info:any){
    // alert("working")
    this._router.navigate(['/getdetails', info.login]);
  }



  ngOnInit(): void {

    this.graphdata.getprofile().subscribe((data1: any) => {

      console.log("gitlist", data1);
      this.information = data1;

    })

    this.graphdata.getuserdata().subscribe((data: any) => {
      console.log(data);
      this.datas = data;

    })
  }

}
