import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphsService {

  details1 = [  
    {"id" : 1001, "name" : "Aravind", "marks" : 90},  
    {"id" : 1002, "name" : "sunnny", "marks" : 80},  
    {"id" : 1003, "name" : "honey", "marks" : 70},  
    {"id" : 1004, "name" : "sai", "marks" : 85},  
    {"id" : 1005, "name" : "vignesh", "marks" : 60}  
    ];  

  constructor(private httpClient: HttpClient) { }
  getdetails1(){ 
    return this.details1;  
  }
  getuserdata(){
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users`);
  }

  getprofile():Observable<any>{
    // console.log(searchQuery,"service ");
    
    //  let dataURL='https://api.github.com/users/${searchQuery}'
    //  return this.httpClient.get<any>(dataURL).pipe(retry(coint 1),
    //  );
    return this.httpClient.get(`https://api.github.com/users`);
  }

  getuserinfo(name:any){
    console.log(name ,"sevice file");
    
    return this.httpClient.get(`https://api.github.com/users/`+name)
  }

}











