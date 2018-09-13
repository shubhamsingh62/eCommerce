define({ "api": [
  {
    "type": "put",
    "url": "/api/v1/cart/:prodId/addToCart",
    "title": "add product into your Cart",
    "version": "0.0.1",
    "group": "cart_operation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>product Id of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t    \"error\": true,\n    \"message\": \"succesfully add to cart\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"prodName\": \"String\",\n            \"price\": \"String\",\n            \"color\": object(type = array),\n            \"material\": \"String\",\n            \"weight\": \"String\",\n            \"rating\": number,\n            \"service\": object(type = array),\n            \"paymentMethod\":object(type = array),\n            \"warranty\": \"String\",\n            \"category\": \"String\",\n            \"prodId\": \"String\",\n            \"created\": \"date\",\n            \"lastModified\": \"date\",\n            \"__v\": 0,\n            \"itemIsInCart\": boolean,\n            \"quantity\": number\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecom.js",
    "groupTitle": "cart_operation",
    "name": "PutApiV1CartProdidAddtocart"
  },
  {
    "type": "put",
    "url": "/api/v1/cart/:prodId/removed/cart",
    "title": "deleted  productfrom your Cart",
    "version": "0.0.1",
    "group": "cart_operation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>product Id of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t    \"error\": true,\n    \"message\": \"succesfully deleted from cart\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"prodName\": \"String\",\n            \"price\": \"String\",\n            \"color\": object(type = array),\n            \"material\": \"String\",\n            \"weight\": \"String\",\n            \"rating\": number,\n            \"service\": object(type = array),\n            \"paymentMethod\":object(type = array),\n            \"warranty\": \"String\",\n            \"category\": \"String\",\n            \"prodId\": \"String\",\n            \"created\": \"date\",\n            \"lastModified\": \"date\",\n            \"__v\": 0,\n            \"itemIsInCart\": boolean,\n            \"quantity\": number\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecom.js",
    "groupTitle": "cart_operation",
    "name": "PutApiV1CartProdidRemovedCart"
  },
  {
    "type": "post",
    "url": "/api/v1/product/create",
    "title": "Create Product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ProdName",
            "description": "<p>product name of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>color of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "material",
            "description": "<p>material of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>weight of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rating",
            "description": "<p>rating of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "quantity",
            "description": "<p>quantity of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paymentMethod",
            "description": "<p>payment Method of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    {\n\t    \"error\": true,\n    \"message\": \"succesfully Created product\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"prodName\": \"String\",\n            \"price\": \"String\",\n            \"color\": object(type = array),\n            \"material\": \"String\",\n            \"weight\": \"String\",\n            \"rating\": number,\n            \"service\": object(type = array),\n            \"paymentMethod\":object(type = array),\n            \"warranty\": \"String\",\n            \"category\": \"String\",\n            \"prodId\": \"String\",\n            \"created\": \"date\",\n            \"lastModified\": \"date\",\n            \"__v\": 0,\n            \"itemIsInCart\": boolean,\n            \"quantity\": number\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecom.js",
    "groupTitle": "create",
    "name": "PostApiV1ProductCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/product/:prodId/delete",
    "title": "delete product",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>prodId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " *{\n    \"error\": true,\n    \"message\": \"succesfully deleted\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 0,\n        \"ok\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecom.js",
    "groupTitle": "delete",
    "name": "PostApiV1ProductProdidDelete"
  },
  {
    "type": "get",
    "url": "/api/v1/product/all",
    "title": "Get all product",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": true,\n    \"message\": \"succesfully find all product\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"prodName\": \"String\",\n            \"price\": \"String\",\n            \"color\": object(type = array),\n            \"material\": \"String\",\n            \"weight\": \"String\",\n            \"rating\": number,\n            \"service\": object(type = array),\n            \"paymentMethod\":object(type = array),\n            \"warranty\": \"String\",\n            \"category\": \"String\",\n            \"prodId\": \"String\",\n            \"created\": \"date\",\n            \"lastModified\": \"date\",\n            \"__v\": 0,\n            \"itemIsInCart\": boolean,\n            \"quantity\": number\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Load all product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecom.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductAll"
  },
  {
    "type": "get",
    "url": "/api/v1/product/:prodId",
    "title": "Get a single product",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>The prodId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n\t    \"error\": true,\n    \"message\": \"succesfully viewed\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"prodName\": \"String\",\n            \"price\": \"String\",\n            \"color\": object(type = array),\n            \"material\": \"String\",\n            \"weight\": \"String\",\n            \"rating\": number,\n            \"service\":object(type = array),\n            \"paymentMethod\":object(type = array),\n            \"warranty\": \"String\",\n            \"category\": \"String\",\n            \"prodId\": \"String\",\n            \"created\": \"date\",\n            \"lastModified\": \"date\",\n            \"__v\": 0,\n            \"itemIsInCart\": boolean,\n            \"quantity\": number\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecom.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductProdid"
  },
  {
    "type": "get",
    "url": "/api/v1/product/view/by/category/:category",
    "title": "Get product by their category",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t    \"error\": true,\n    \"message\": \"succesfully viewed by category\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"prodName\": \"String\",\n            \"price\": \"String\",\n            \"color\": object(type = array),\n            \"material\": \"String\",\n            \"weight\": \"String\",\n            \"rating\": number,\n            \"service\": object(type = array),\n            \"paymentMethod\":object(type = array),\n            \"warranty\": \"String\",\n            \"category\": \"String\",\n            \"prodId\": \"String\",\n            \"created\": \"date\",\n            \"lastModified\": \"date\",\n            \"__v\": 0,\n            \"itemIsInCart\": boolean,\n            \"quantity\": number\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecom.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductViewByCategoryCategory"
  },
  {
    "type": "get",
    "url": "/api/v1/product/view/by/name/:prodName",
    "title": "Get product by their Name",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodName",
            "description": "<p>product name of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t    \"error\": true,\n    \"message\": \"succesfully viewed by product Name\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"prodName\": \"String\",\n            \"price\": \"String\",\n            \"color\": object(type = array),\n            \"material\": \"String\",\n            \"weight\": \"String\",\n            \"rating\": number,\n            \"service\": object(type = array),\n            \"paymentMethod\":object(type = array),\n            \"warranty\": \"String\",\n            \"category\": \"String\",\n            \"prodId\": \"String\",\n            \"created\": \"date\",\n            \"lastModified\": \"date\",\n            \"__v\": 0,\n            \"itemIsInCart\": boolean,\n            \"quantity\": number\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecom.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductViewByNameProdname"
  },
  {
    "type": "put",
    "url": "/api/v1/product/:prodId/update",
    "title": "update prod by their prodId",
    "version": "0.0.1",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>prodId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " *{\n    \"error\": true,\n    \"message\": \"succesfully edited \",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 0,\n        \"ok\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecom.js",
    "groupTitle": "update",
    "name": "PutApiV1ProductProdidUpdate"
  }
] });
