import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CurdService } from '../curd.service';

@Component({
  selector: 'app-tableform',
  templateUrl: './tableform.component.html',
  styleUrls: ['./tableform.component.scss']
})
export class TableformComponent implements OnInit {
  result:any
  snapid: any;
  constructor(private tableservice:CurdService,private router:Router,private activate:ActivatedRoute) { }

  formdata=new FormGroup({
    firstname:new FormControl('',),
    age:new FormControl('',),
    gmail:new FormControl('',),
    phn:new FormControl('',),
    gender:new FormControl('',),
    selectlist:new FormControl('',)
  })

  ngOnInit(): void {
   this.snapid = this.activate.snapshot.paramMap.get('id') ||'';
   this.getdata();
  }
  onSubmit(){
    alert("hello")
    this.tableservice.postdata(this.formdata.value).subscribe((data3)=>{
      console.log(data3,"postingg data from ts file");
      
    })
  }
  

  getdata(){
    this.tableservice.getTableData1(this.snapid).subscribe((data)=>{
      console.log(data,"getting data");
      this.result=data
      this.formdata.patchValue({
        firstname:this.result.firstname,
        age:this.result.age,
        gmail:this.result.gmail,
        phn:this.result.phn,
        gender:this.result.gender,
        selectlist:this.result.selectlist
      })
    })
  }

  updatedata(){
    alert("bye")
    const payload = {
      'id':this.snapid,
      'firstname': this.formdata.value.firstname,
      'age': this.formdata.value.age,
      'gmail': this.formdata.value.gmail,
      'phn': this.formdata.value.phn,
      'gender': this.formdata.value.gender,
      'selectlist': this.formdata.value.selectlist
    }
   this.tableservice.updatedata(payload).subscribe((res:any)=>{
      console.log(res,"this is updateddddd data");
      
    })
  }
}
