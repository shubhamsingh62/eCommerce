const express = require('express');
const ecomController = require('./../controllers/ecomController');
const appConfig = require('./../config/appConfig');
const auth = require('./../middlewares/auth');

let setRouter = (app)=>{
    baseUrl=appConfig.apiVersion;
    
    app.post(baseUrl+'/product/create',auth.isAuthenticated,ecomController.addProduct);
       
    /**
	 * @api {post} /api/v1/product/create Create Product
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} ProdName product name of the product passed as a body parameter
	 * @apiParam {String} price price of the product passed as a body parameter
	 * @apiParam {String} color color of the product passed as a body parameter
	 * @apiParam {String} category category of the product passed as a body parameter
	 * @apiParam {String} material material of the product passed as a body parameter
	 * @apiParam {String} weight weight of the product passed as a body parameter
	 * @apiParam {String} rating rating of the product passed as a body parameter
	 * @apiParam {String} category category of the product passed as a body parameter
	 * @apiParam {String} quantity quantity of the product passed as a body parameter
	 * @apiParam {String} paymentMethod payment Method of the product passed as a body parameter
     * 
     * 
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    {
	    "error": true,
    "message": "succesfully Created product",
    "status": 200,
    "data": [
        {
            "prodName": "String",
            "price": "String",
            "color": object(type = array),
            "material": "String",
            "weight": "String",
            "rating": number,
            "service": object(type = array),
            "paymentMethod":object(type = array),
            "warranty": "String",
            "category": "String",
            "prodId": "String",
            "created": "date",
            "lastModified": "date",
            "__v": 0,
            "itemIsInCart": boolean,
            "quantity": number
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl+'/product/all',auth.isAuthenticated,ecomController.getAllProduct);

    /**
	 * @api {get} /api/v1/product/all Get all product
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": true,
    "message": "succesfully find all product",
    "status": 200,
    "data": [
        {
            "prodName": "String",
            "price": "String",
            "color": object(type = array),
            "material": "String",
            "weight": "String",
            "rating": number,
            "service": object(type = array),
            "paymentMethod":object(type = array),
            "warranty": "String",
            "category": "String",
            "prodId": "String",
            "created": "date",
            "lastModified": "date",
            "__v": 0,
            "itemIsInCart": boolean,
            "quantity": number
        }
    ]
} 
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Load all product Details",
	    "status": 500,
	    "data": null
	   }
	 */
    app.put(baseUrl+'/product/:prodId/update',auth.isAuthenticated,ecomController.editProduct);
   
    /**
	 * @api {put} /api/v1/product/:prodId/update update prod by their prodId
	 * @apiVersion 0.0.1
	 * @apiGroup update
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} prodId prodId of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  *{
    "error": true,
    "message": "succesfully edited ",
    "status": 200,
    "data": {
        "n": 1,
        "nModified": 0,
        "ok": 1
    }
}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */


    app.post(baseUrl+'/product/:prodId/delete',auth.isAuthenticated,ecomController.deleteProduct);

    /**
	 * @api {post} /api/v1/product/:prodId/delete  delete product
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} prodId prodId of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  *{
    "error": true,
    "message": "succesfully deleted",
    "status": 200,
    "data": {
        "n": 0,
        "ok": 1
    }
}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */
    app.get(baseUrl+'/product/:prodId',auth.isAuthenticated,ecomController.viewByProductId);
    
    
    /**
	 * @api {get} /api/v1/product/:prodId Get a single product
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} prodId The prodId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *   {
	    "error": true,
    "message": "succesfully viewed",
    "status": 200,
    "data": [
        {
            "prodName": "String",
            "price": "String",
            "color": object(type = array),
            "material": "String",
            "weight": "String",
            "rating": number,
            "service":object(type = array),
            "paymentMethod":object(type = array),
            "warranty": "String",
            "category": "String",
            "prodId": "String",
            "created": "date",
            "lastModified": "date",
            "__v": 0,
            "itemIsInCart": boolean,
            "quantity": number
        }
    ]
} 
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl+'/product/view/by/category/:category',auth.isAuthenticated,ecomController.viewByCategory);
       
    /**
	 * @api {get} /api/v1/product/view/by/category/:category Get product by their category
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} category category of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 * {
	    "error": true,
    "message": "succesfully viewed by category",
    "status": 200,
    "data": [
        {
            "prodName": "String",
            "price": "String",
            "color": object(type = array),
            "material": "String",
            "weight": "String",
            "rating": number,
            "service": object(type = array),
            "paymentMethod":object(type = array),
            "warranty": "String",
            "category": "String",
            "prodId": "String",
            "created": "date",
            "lastModified": "date",
            "__v": 0,
            "itemIsInCart": boolean,
            "quantity": number
        }
    ]
}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */


    app.get(baseUrl+'/product/view/by/name/:prodName',auth.isAuthenticated,ecomController.viewByProdName);
   
    /**
	 * @api {get} /api/v1/product/view/by/name/:prodName Get product by their Name
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} prodName product name of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 * {
	    "error": true,
    "message": "succesfully viewed by product Name",
    "status": 200,
    "data": [
        {
            "prodName": "String",
            "price": "String",
            "color": object(type = array),
            "material": "String",
            "weight": "String",
            "rating": number,
            "service": object(type = array),
            "paymentMethod":object(type = array),
            "warranty": "String",
            "category": "String",
            "prodId": "String",
            "created": "date",
            "lastModified": "date",
            "__v": 0,
            "itemIsInCart": boolean,
            "quantity": number
        }
    ]
}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

   
   
    app.put(baseUrl+'/cart/:prodId/addToCart',auth.isAuthenticated,ecomController.addToCart);
   
    /**
	 * @api {put} /api/v1/cart/:prodId/addToCart add product into your Cart
	 * @apiVersion 0.0.1
	 * @apiGroup cart operation
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} prodId product Id of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 * {
	    "error": true,
    "message": "succesfully add to cart",
    "status": 200,
    "data": [
        {
            "prodName": "String",
            "price": "String",
            "color": object(type = array),
            "material": "String",
            "weight": "String",
            "rating": number,
            "service": object(type = array),
            "paymentMethod":object(type = array),
            "warranty": "String",
            "category": "String",
            "prodId": "String",
            "created": "date",
            "lastModified": "date",
            "__v": 0,
            "itemIsInCart": boolean,
            "quantity": number
        }
    ]
}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    
    app.put(baseUrl+'/cart/:prodId/removed/cart',auth.isAuthenticated,ecomController.deleteFromCart);

    /**
	 * @api {put} /api/v1/cart/:prodId/removed/cart   deleted  productfrom your Cart
	 * @apiVersion 0.0.1
	 * @apiGroup cart operation
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} prodId product Id of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 * {
	    "error": true,
    "message": "succesfully deleted from cart",
    "status": 200,
    "data": [
        {
            "prodName": "String",
            "price": "String",
            "color": object(type = array),
            "material": "String",
            "weight": "String",
            "rating": number,
            "service": object(type = array),
            "paymentMethod":object(type = array),
            "warranty": "String",
            "category": "String",
            "prodId": "String",
            "created": "date",
            "lastModified": "date",
            "__v": 0,
            "itemIsInCart": boolean,
            "quantity": number
        }
    ]
}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

}

module.exports={
    setRouter:setRouter
}