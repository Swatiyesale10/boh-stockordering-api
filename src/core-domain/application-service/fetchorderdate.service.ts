import { Inject, Injectable } from "@nestjs/common";

import { IBaseService } from "src/core-domain/application-service/base.service";
import { HttpClient } from "src/infrastructure/client/http.client";
import { OrderDetailsModel } from "../models/orderdetails.model";




@Injectable()
export default class FetchOrderDateService implements IBaseService<number, OrderDetailsModel> {
    constructor(private httpclient: HttpClient) {
        console.log('FetchOrderDateService created')
    }

    async handle(): Promise<OrderDetailsModel> {
        const responseObject = await this.httpclient.get('date');
        console.log("####S",responseObject)
        return responseObject;
    }
    Order
 

    
}