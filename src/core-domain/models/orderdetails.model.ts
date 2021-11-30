export class OrderDetailsModel {
    constructor(
       
         public order_id:string,
         public supplier_id:number,
         public status_id:number,
         public ordered_by:string,
         public accepted_by:string,
         public creation_date:Date,
         public cancelled_date:Date,
         public amf_fl:string,
         public amk_kl:string,
         //public tracks: OrderTrack[]

         
         

       
     ){}
    
   
     
     
     
     
}
