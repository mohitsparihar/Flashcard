import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private dataUrl = 'assets/data.json'

  constructor(private httpClient : HttpClient) { }

  getData() {
    return this.httpClient.get(this.dataUrl)
  }
}
