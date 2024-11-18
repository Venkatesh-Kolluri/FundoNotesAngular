import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  PostMethod(url: string, reqData: any, token: boolean = false, httpOptions: any = {}) {
    return this.httpClient.post(url, reqData, token && httpOptions)
  }
  PostServiceReset(reqUrl: string, reqData: any, token: boolean = true, httpOptions: any = {}) {
    return this.httpClient.post(reqUrl, reqData, token && httpOptions)
  }
  getService(reqUrl: string, token: boolean = true, httpOptions: any = {}) {
    return this.httpClient.get(reqUrl, token && httpOptions)
  }
  putService(reqUrl: string, reqData: any, token: boolean = true, httpOptions: any = {}) {
    return this.httpClient.put(reqUrl, reqData, token && httpOptions)
  }
  deleteService(reqUrl: string, token: boolean = true, httpOptions: any = {}) {
    return this.httpClient.delete(reqUrl, token && httpOptions)

  }

}
