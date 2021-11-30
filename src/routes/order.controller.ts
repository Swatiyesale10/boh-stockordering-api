import { Body, Controller, Get, HttpException, HttpStatus, Post, Put } from "@nestjs/common";
import CreateOrderService from "src/core-domain/application-service/addorder.service";
import FetchOrderService from "src/core-domain/application-service/fetchorder.service";
import FetchOrderDateService from "src/core-domain/application-service/fetchorderdate.service";
import UpdateOrderService from "src/core-domain/application-service/updateorder.service";
import { OrderDetailsModel } from "src/core-domain/models/orderdetails.model";

import { RequestModel } from "src/core-domain/models/request.model";
import { WinstonLoggerService } from "src/infrastructure/logger/winston-logger.service";


@Controller()
export class OrderController {
    constructor(
        private fetchOrderService: FetchOrderService,
        private updateOrderService: UpdateOrderService,
        private createOrderService: CreateOrderService,
        private fetchOrderServiceDate: FetchOrderDateService,
        private logger: WinstonLoggerService,) {
        this.logger.setContext(OrderController.name);
        console.log('orders service controller created')
    }

    @Get('/all')
    fetchOrders() {
        this.logger.info('in fetchMasterData info', { key: 'value' });
        this.logger.error('in fetchMasterData error', { key: 'value' });
        this.logger.debug('in fetchMasterData debug', { key: 'value' });
        this.logger.warn('in fetchMasterData warn');
        console.log('orders service controller fetchOrders method')
        //throw new HttpException("err string", HttpStatus.FORBIDDEN);
        return this.fetchOrderService.handle()
    }

    @Put('id/status')
    updateStatus(@Body()req:RequestModel){
        console.log('update status create##',req)
         return this.updateOrderService.handle(req)
    }

    @Post('/add')
    createDetails(@Body()orderdetails:OrderDetailsModel){
        console.log('post')
        console.log("odtconstroller",orderdetails)
        return this.createOrderService.handle(orderdetails)
    }
   
    @Get('/date')
    fetchOrdersByDate() {
       
        return this.fetchOrderServiceDate.handle()
    }


}