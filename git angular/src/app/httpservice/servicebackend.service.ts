import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicebackendService {
  baseurl="http://localhost:3000/user/"; 
  
  
  httpheader=new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { 
    
  }
  getall(tab:string):Observable<any>
  {
 //return this.http.get(this.baseurl,{headers:this.httpheader});
 return this.http.get(this.baseurl+tab,{headers:this.httpheader});
  }
  getcreate(type,tab:string):Observable<any>
  {
   const body =type;
  
  return this.http.post(this.baseurl+tab,body,{headers:this.httpheader});
  }
  getdelate(id,tab:string):Observable<any>
  {

  return this.http.delete(this.baseurl+"/data/"+tab+"/"+id+"/",{headers:this.httpheader});
  }
  getupdate(type,tab:string):Observable<any>
  {
   const body =type;
  return this.http.put(this.baseurl+"/data/"+tab+"/"+type.id+"/",body,{headers:this.httpheader});
  }
 
}
