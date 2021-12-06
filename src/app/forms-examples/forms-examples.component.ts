import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GraphsService } from '../graphs.service';

@Component({
  selector: 'app-forms-examples',
  templateUrl: './forms-examples.component.html',
  styleUrls: ['./forms-examples.component.scss']
})
export class FormsExamplesComponent implements OnInit {
  // contenteditable=true
  editdata: any;
  result: any;
  
  formdetails = new FormGroup({
    firstname: new FormControl('',),
    age: new FormControl(','),
    gmail: new FormControl(''),
    phn: new FormControl(''),
    gender: new FormControl(''),
    selectlist: new FormControl('')
  })
  
  // $('.datepicker').datepicker();



  constructor(private graphdata: GraphsService, private _router: Router, private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.editdata = this.activeroute.snapshot.paramMap.get('id') || '';
    console.log("edit span data ", this.editdata);
    this.getuserdata(this.editdata);

    // this.formdetails.patchValue({
    //   firstname: this.result.firstname,
    //   age: this.result.age,
    //   gmail: this.result.gmail,
    //   phn: this.result.phn,
    //   gender: this.result.gender,
    //   selectlist: this.result.selectlist
    // })
  }
  getuserdata(data: any) {
    this.graphdata.jsonGetPostData3(data).subscribe((data: any) => {
      this.result = data
      console.log("getting server data", data);
      console.log(this.result.firstname);

    })
  }
  deleteData(data: any) {
    console.log(data, "delete data");
    this.graphdata.deletedata(data).subscribe((data1) => {
      console.log(data1, "delete data");
      // this.getuserdata();

    })

  }
  // addData(add:any){
  //   this.graphdata.jsonGetPostData1(add).subscribe(this.addData)

  // }

  onSubmit() {
    alert("onsubmit data")
    console.log("forms example data", this.formdetails.value)
    this.result = this.formdetails.value

    this.graphdata.jsonGetPostData1(this.result).subscribe((data1: any) => {
      console.log("post data1", data1);

    })

  }
  updateNewData() {
    alert("updated data")
    console.log(this.editdata, "id value");
    console.log(this.formdetails, "updatedata");
    const payload = {
      'id':this.editdata,
      'firstname': this.formdetails.value.firstname,
      'age': this.formdetails.value.age,
      'gmail': this.formdetails.value.gmail,
      'phn': this.formdetails.value.phn,
      'gender': this.formdetails.value.gender,
      'selectlist': this.formdetails.value.selectlist.value
    }
    this.graphdata.updatedata(payload).subscribe((data2: any) => {
      console.log(data2, "updatedata ts file");
    })

  }


}
