import { Body, Injectable } from "@nestjs/common";
import { HttpClient } from "src/infrastructure/client/http.client";
import { OrderDetailsModel } from "../models/orderdetails.model";

import { IBaseService } from "./base.service";

@Injectable()
export default class CreateOrderService implements IBaseService< OrderDetailsModel, OrderDetailsModel> {
    constructor(private httpclient: HttpClient) {
        console.log('FetchOrderService created')
    }
  async  handle(@Body()orderdetails:OrderDetailsModel):Promise<OrderDetailsModel> {
        const responseObject = await this.httpclient.post('add',orderdetails)
        return responseObject
    }
}