import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  base_url = environment.base_url;

  constructor(private http: HttpClient) { }
  login(data):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
      withCredentials: true
    };
    return this.http.post( `${this.base_url}/login`, data, httpOptions)
  }
  logout():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      withCredentials: true
    }
    return this.http.get(`${this.base_url}/logout`, httpOptions);
  }
  register(data):Observable<any>{
    return this.http.post(`${this.base_url}/register`,data);
  }
  pblist():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
      withCredentials: true
    };
    return this.http.get(`${this.base_url}/pblist`, httpOptions);
  }
  pbcreate(data):Observable<any>{
    return this.http.post(`${this.base_url}/create`,data, {withCredentials: true});
  }
  pbdelete(id):Observable<any>{
    return this.http.delete(`${this.base_url}/pbdelete/${id}`);
  }
  pbupdate(data):Observable<any>{
    console.log(data)
    return this.http.put(`${this.base_url}/pbupdate`, data);
  }
}
