const { Product } = require("../models/index.js");
 
module.exports = app => {
    const productLD = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", productLD.create);
  
    // Retrieve all Tutorials
    router.get("/", productLD.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/P_Name", productLD.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", productLD.findOne);
    // Update a Tutorial with id
    router.put("/:id", productLD.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", productLD.delete);
  
    // Delete all Tutorials
    router.delete("/", productLD.deleteAll);
  
    app.use('/api/productLDs', router);
  };