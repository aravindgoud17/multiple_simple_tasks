import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GraphsService } from '../graphs.service';

@Component({
  selector: 'app-curd-task',
  templateUrl: './curd-task.component.html',
  styleUrls: ['./curd-task.component.scss']
})
export class CurdTaskComponent implements OnInit {
  result: any;
  content:any;

  constructor(private graph:GraphsService ,private _router:Router
    // private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.getdata();
    
   
  }
  getdata(){
    this.graph.jsonGetPostData().subscribe((data)=>{
      this.result=data
    })
  }

  delete(data:any){
      this.graph.deletedata(data).subscribe((data1)=>{
        alert("do u want delete data")
        this.getdata()
      })
  }

}
