import { HttpService } from "@nestjs/axios";
import { AxiosRequestConfig } from "axios";
import { ConfigService } from "../configuration/config.service";

import { Injectable } from "@nestjs/common";
import { map, lastValueFrom } from "rxjs";
import { OrderSettingConstants } from "../constants/order-setting";




@Injectable()
export class HttpClient {

  constructor(private httpService: HttpService) {
    console.log("Httpclient object created")
  }

  public async get(url: string) {

    let responsedata: any
    var baseUrl = ConfigService.create().getBaseURl(OrderSettingConstants.MASTER_BASE_URL)

    console.log("URl :", baseUrl + url)
    var env = ConfigService.create().isProduction();
    if (env) {

      console.log("Enter into production Block")
      const tokenObservable = this.getIdentityToken(baseUrl);
      console.log(tokenObservable)
      var token = await (await lastValueFrom(tokenObservable)).data;
      
        const requestConfig: AxiosRequestConfig = {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }

        responsedata = await lastValueFrom(this.httpService.get(baseUrl + url, requestConfig));


    } else {
      console.log("Enter into Dev Block", baseUrl + url)
      responsedata = await lastValueFrom(this.httpService.get(baseUrl + url));
    }
    console.log(responsedata.data)
    return responsedata.data;
  }


  public async put(url: string, data: any) {

    let responsedata: any
    var baseUrl = ConfigService.create().getBaseURl(OrderSettingConstants.MASTER_BASE_URL)

    console.log("URl :", baseUrl + url)
    var env = ConfigService.create().isProduction();
    if (env) {

      console.log("Enter into production Block")
      const tokenObservable = this.getIdentityToken(baseUrl);
      console.log(tokenObservable)
      var token = await (await lastValueFrom(tokenObservable)).data;
      
        const requestConfig: AxiosRequestConfig = {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }

        responsedata = await lastValueFrom(this.httpService.put(baseUrl + url, data, requestConfig));


    } else {
      console.log("Enter into Dev Block", baseUrl + url)
      responsedata = await lastValueFrom(this.httpService.put(baseUrl + url, data));
    }
    console.log(responsedata.data)
    return responsedata.data;
  }

  public async getbyid(url: string, data: any) {

    let responsedata: any
    var baseUrl = ConfigService.create().getBaseURl(OrderSettingConstants.MASTER_BASE_URL)

    console.log("URl :", baseUrl + url)
    var env = ConfigService.create().isProduction();
    if (env) {

      console.log("Enter into production Block")
      const tokenObservable = this.getIdentityToken(baseUrl);
      console.log(tokenObservable)
      var token = await (await lastValueFrom(tokenObservable)).data;
      
        const requestConfig: AxiosRequestConfig = {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }

        responsedata = await lastValueFrom(this.httpService.post(baseUrl + url, data, requestConfig));


    } else {
      console.log("Enter into Dev Block", baseUrl + url)
      responsedata = await lastValueFrom(this.httpService.post(baseUrl + url, data));
    }
    console.log(responsedata.data)
    return responsedata.data;
  }

  public async post(url: string, data: any) {

    let responsedata: any
    var baseUrl = ConfigService.create().getBaseURl(OrderSettingConstants.MASTER_BASE_URL)

    console.log("URl :", baseUrl + url)
    var env = ConfigService.create().isProduction();
    if (env) {

      console.log("Enter into production Block")
      const tokenObservable = this.getIdentityToken(baseUrl);
      console.log(tokenObservable)
      var token = await (await lastValueFrom(tokenObservable)).data;
      
        const requestConfig: AxiosRequestConfig = {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }

        responsedata = await lastValueFrom(this.httpService.post(baseUrl + url, data, requestConfig));


    } else {
      console.log("Enter into Dev Block", baseUrl + url)
      responsedata = await lastValueFrom(this.httpService.post(baseUrl + url, data));
    }
    console.log(responsedata.data)
    return responsedata.data;
  }
  private getIdentityToken(recipientUrl) {
    /*if (
      process.env.GCP_IDENTITY_TOKEN &&
      isActive(process.env.GCP_IDENTITY_TOKEN)
    ) {
      return process.env.GCP_IDENTITY_TOKEN;
    }*/
    const requestConfig: AxiosRequestConfig = {
      params: {
        audience: recipientUrl,
      },
      headers: {
        'metadata-flavor': 'Google',
      }
    }
    return this.httpService.get(process.env.GCP_IDENTITY_TOKEN_URL, requestConfig);
  }
}