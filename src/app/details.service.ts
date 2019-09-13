import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DetailsService {
private dataurl = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpiclient: HttpClient) { }

  getApicall(url: any) {
    return this.httpiclient.get(this.dataurl + url);
  }
}
