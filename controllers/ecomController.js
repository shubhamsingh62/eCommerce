const express = require('express')
const route = require('./../routes/ecom')
const response = require('./../lib/responseLib')
const mongoose = require('mongoose')
const shortId = require('shortid')
const check = require('./../lib/checkLib')
const logger = require('./../lib/loggerLib')
const prodModel = mongoose.model('prod')

let addProduct = (req,res) =>{
   let today = Date.now();
   let prodId = shortId.generate()

   let newProd = new  prodModel({
       prodId:prodId,
       prodName:req.body.prodName,
       price:req.body.price,
       material:req.body.material,
       weight:req.body.weight,
       rating:req.body.rating,
       quantity:req.body.quantity,
       warranty:req.body.warranty,
       category:req.body.category,
       created:today,
       lastModified:today

   })
   let color = (req.body.color!= undefined && req.body.color != null && req.body.color != '')?req.body.color.split(','):[]
 newProd.color = color; 

 let service = (req.body.service!= undefined && req.body.service!=null && req.body.service!='')?req.body.service.split(','):[]
   newProd.service=service;
let paymentMethod = (req.body.paymentMethod!= undefined && req.body.paymentMethod!=null && req.body.paymentMethod!='')?req.body.paymentMethod.split(','):[]
newProd.paymentMethod=paymentMethod;

newProd.save( (err,result)=>{
    if(err){
        logger.error(err.Message,"ecomControler:add to product",7)
        console.log(err)
        let apiResponse = response.genrate(false,'error occcures',404,null)
        res.send(apiResponse);
    }else{

        let apiResponse = response.genrate(true," succesfully product created ",200,result)
        res.send(apiResponse);
    }
      
});

}

let getAllProduct = (req,res)=>{
    prodModel.find()
             .select('-_V -_id')
             .lean()
             .exec((err,result)=>{
                 if(err){
                     logger.error(err.Message,"ecomControler:getAllProduct",7);
                     let apiResponse = response.genrate(false,"some error occured",505,null)
                     res.send(apiResponse)
                 }else if(check.isEmpty(result)){
                     logger.info('No product Found', 'ecom Controller: getAllProduct')
                     let apiResponse = response.genrate(false,'data not found',404,null);
                     res.send(apiResponse);
                 }else{
                     console.log("all product are");
                     let apiResponse = response.genrate(true,'succesfully find all product',200,result);
                     res.send(apiResponse);
                 }
             })
}

let editProduct = (req,res)=>{
    prodModel.findOne({'prodId':req.params.prodId},(err,result)=>{
        if(err){
            logger.error(err.message, 'ecom Controller: editProduct', 10)
            console.log(err)
            let apiResponse = response.genrate(false,'some error occured',500,null);
            res.send(apiResponse)
        }else if(check.isEmpty(result)){
            logger.info('No product  Found', 'ecom Controller: editProduct')
           // console.log('data not found');
            let apiResponse = response.genrate(false,'produt with this Id not found',404,null);
            res.send(apiResponse)
        }else{
            let option = req.body
     prodModel.update({'prodId':req.params.prodId},option,{multi:true}).exec((err,result)=>{
        if(err){
             logger.error(err.Message,"ecomControler:editProduct",7);
            let apiResponse = response.genrate(false,"some error occured",505,null)
            res.send(apiResponse)
        }else if(check.isEmpty(result)){
            logger.info('No product Found', 'ecom Controller: editProduct');
            let apiResponse = response.genrate(false,'product Id not found',404,null);
            res.send(apiResponse);
        }else{
            console.log("all product are updated");
            let apiResponse = response.genrate(true,'succesfully edited ',200,result);
            res.send(apiResponse);
        }
    })
}
    })
}



let deleteProduct = (req,res)=>{
    prodModel.findOne({'prodId':req.params.prodId},(err,result)=>{
        if(err){
            logger.error(err.message, 'ecom Controller: deleteProduct', 10)
            console.log(err)
            let apiResponse = response.genrate(false,'some error occured',500,null);
            res.send(apiResponse)
        }else if(check.isEmpty(result)){
            logger.info('No product  Found', 'ecom Controller: deleteProduct')
           // console.log('data not found');
            let apiResponse = response.genrate(false,'produt with this Id not found',404,null);
            res.send(apiResponse)
        }else{
            prodModel.remove({'prodId':req.params.prodId},(err,result)=>{
                if(err){
                    logger.error(err.Message,"ecomControler:editProduct",7);
                    let apiResponse = response.genrate(false,"some error occured",505,null)
                    res.send(apiResponse)
                }else if(check.isEmpty(result)){
                    logger.info('No product Found', 'ecom Controller:deleteProduct');
                    let apiResponse = response.genrate(false,'data not found',404,null);
                    res.send(apiResponse);
                }else{
                    console.log("product removed");
                    let apiResponse = response.genrate(true,'succesfully deleted',200,result);
                    res.send(apiResponse);
                } 
            })
        }

    })
}


/*let deleteProduct = (req,res)=>{

    let cat = req.params.prodId;
    if( check.isEmpty(cat)){
        console.log("valid product Id should be passed");
        res.send('valid product Id should be passed ');
        
    }else{
    prodModel.remove({'prodId':req.params.prodId},(err,result)=>{
        if(err){
            logger.error(err.Message,"ecomControler:editProduct",7);
            let apiResponse = response.genrate(false,"some error occured",505,null)
            res.send(apiResponse)
        }else if(check.isEmpty(result)){
            logger.info('No product Found', 'ecom Controller:deleteProduct');
            let apiResponse = response.genrate(false,'data not found',404,null);
            res.send(apiResponse);
        }else{
            console.log("product removed");
            let apiResponse = response.genrate(true,'succesfully deleted',200,result);
            res.send(apiResponse);
        } 
    })
}
}*/

let viewByProductId = (req,res)=>{
    prodModel.findOne({'prodId':req.params.prodId},(err,result)=>{
        if(err){
            logger.error(err.Message,"ecomControler:viewProductById",7);
            let apiResponse = response.genrate(false,"some error occured",505,null)
            res.send(apiResponse);
        }else if(check.isEmpty(result)){
            logger.info('No product Found', 'ecom Controller: viewByProductId');
            let apiResponse = response.genrate(false,'data not found',500,null);
            res.send(apiResponse);
        }else{
            console.log("product found");
            let apiResponse = response.genrate(true,'succesfully viewed ',200,result);
            res.send(apiResponse);
        } 

    })
}

let viewByCategory = (req,res)=>{
    let cat = req.params.category
    if( check.isEmpty(cat)){
        console.log("valid category should be passed");
        res.send('valid category should be passed ');
        
    }else{
        prodModel.find({'category':req.params.category},(err,result)=>{
            if(err){
                logger.error(err.Message,"ecomControler:viewByCategory",7);
                let apiResponse = response.genrate(false,"some error occured",505,null)
                res.send(apiResponse)
            }else if(check.isEmpty(result)){
                 logger.info('No product Found', 'ecom Controller: viewByCategory');
                let apiResponse = response.genrate(false,'category name not found',404,null);
                res.send(apiResponse);
            }else{
                console.log("category found");
                let apiResponse = response.genrate(true,'succesfully viewed by category',200,result);
            res.send(apiResponse);
            } 
        })
    }
}

let viewByProdName = (req,res)=>{
    let prod = req.params.prodName;
    if( check.isEmpty(prod)){
        logger.info('No product Found', 'ecom Controller: viewByProdName');
        res.send('valid category should be passed ');
        
    }else{
        prodModel.find({'prodName':req.params.prodName},(err,result)=>{
            if(err){
                logger.error(err.Message,"ecomControler:viewByProdName",7);
                let apiResponse = response.genrate(false,"some error occured",505,null);
                res.send(apiResponse)
            }else if(check.isEmpty(result)){
                logger.info('No product Found', 'ecom Controller: viewByProdName');
          // console.log("not found any product with this name");
                let apiResponse = response.genrate(false,'product with this name not found',404,null);
                 res.send(apiResponse);
            }else{
                console.log("category found");
                let apiResponse = response.genrate(true,'succesfully viewed by name ',200,result);
                res.send(apiResponse);
            } 
        })
    }

}


let addToCart = (req,res)=>{
    prodModel.findOneAndUpdate({'prodId':req.params.prodId},{'itemIsInCart':true},{new:true},(err,result)=>{
        if(err){
            logger.error(err.Message,"ecomControler:addToCart",7);
            let apiResponse = response.genrate(false,"some error occured",505,null)
            res.send(apiResponse)
        }else if(check.isEmpty(result)){
            logger.info('No product Found', 'ecom Controller: addToCart');
            console.log("not found any product  in cart with this Id");
            let apiResponse = response.genrate(false,'not found any product  in cart with this Id',404,null);
            res.send(apiResponse);
        }else{
            console.log("item found in cart");
            let apiResponse = response.genrate(true,'succesfully add to cart ',200,result);
            res.send(apiResponse);
        } 
    })
}

let deleteFromCart = (req,res) =>{
    
    prodModel.findOneAndUpdate({'prodId':req.params.prodId},{'itemIsInCart':false},{new:true},(err,result)=>{
        if(err){
            logger.error(err.Message,"ecomControler:deleteFromCart",7);
            console.log(err);
            let apiResponse = response.genrate(false,"some error occured",505,null)
            res.send(apiResponse)
        }else if(check.isEmpty(result)){
            logger.info('No product Found', 'ecom Controller : deleteFromCart');
            let apiResponse = response.genrate(false,'product Id not found in your cart',404,null);
            res.send(apiResponse);
        }else{
            console.log("item remove cart");
            let apiResponse = response.genrate(true,'succesfully delete from cart ',200,result);
            res.send(apiResponse);
        } 
    })
    
}

 

module.exports={
    getAllProduct:getAllProduct,
    addProduct:addProduct,
    editProduct:editProduct,
    deleteProduct:deleteProduct,
    viewByProductId:viewByProductId,
    viewByCategory:viewByCategory,
    viewByProdName:viewByProdName,
    addToCart:addToCart,
    deleteFromCart:deleteFromCart
    
}