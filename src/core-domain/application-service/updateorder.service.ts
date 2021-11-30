import { Body, Inject, Injectable } from "@nestjs/common";

import { IBaseService } from "src/core-domain/application-service/base.service";
import { HttpClient } from "src/infrastructure/client/http.client";
import { OrderDetailsModel } from "../models/orderdetails.model";
import { OrderDetailReqModel } from "../models/orderdetailsreq.model";
import { RequestModel } from "../models/request.model";





@Injectable()
export default class UpdateOrderService implements IBaseService<RequestModel, OrderDetailsModel> {
    constructor(private httpclient: HttpClient) {
        console.log('FetchOrderService created')
    }
    async getStatusIdByName(name:string)
    {
      const model= await this.httpclient.get('all/status')
      
        var status=0;
        model.forEach(obj => {
           if(obj.name===name){
          status=obj.id
           }
    });
       
      return status;
        }
    

    async handle(req:RequestModel): Promise<OrderDetailsModel> {

        const statusId= await this.getStatusIdByName(req.status)
        console.log("requested status",req.status)
        console.log(statusId)
        console.log("req###",req)

        const details= new OrderDetailReqModel(req.order_id,statusId)
       const responseObject = await this.httpclient.put('id/status',details);
    //     // console.log("orderdetailModel",orderdetail)
          // let  orderdetail= await this.httpclient.getbyid('all/id',req)
          // orderdetail.status_id=statusId

    //     console.log(  "orderdetail.status_id" ,orderdetail.status_id)

        
    //  let  track =await this.httpclient.get('track')
    //    track.status_id=statusId,
    //    track.insert_date= new Date(),
    //    track.orderdetail=orderdetail
    //   const ref= await this.httpclient.put('track',track)
    //  console.log("ref",ref)

     
       
        
      //  console.log("PUT##",responseObject)
        return responseObject ;
    }

    
  
    
 

    
}