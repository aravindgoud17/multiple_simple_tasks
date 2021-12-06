import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurdService {

  constructor( private http:HttpClient) { }

  getTableData(){
    console.log("getting data from server");
    return this.http.get(` http://localhost:3000/posts`)
  }

  getTableData1(snapid:any){
    console.log("getting data from server");
    alert("working")
    return this.http.get(` http://localhost:3000/posts/`+snapid)
  }

  deletedata(data:any){
    console.log(data,"service delete data");
    console.log(data.id,"service delete data");
    return this.http.delete(`http://localhost:3000/posts/` + data.id);
  }

  postdata(data:any){
    console.log(data,"sending data to server");
    return this.http.post(`http://localhost:3000/posts/`,data)
  }
  updatedata(postd:any){
    return this.http.put(`http://localhost:3000/posts/` + postd.id,postd)
  }

}
