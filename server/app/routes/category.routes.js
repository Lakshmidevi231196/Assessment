
const { Category} = require("../models/categoryindex.js");
 
module.exports = app => {
    
    const categoryLD =require("../controllers/category.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial

    router.post("/", categoryLD.create);
  
    // Retrieve all Tutorials
    
    router.get("/", categoryLD.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/Processor", categoryLD.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", categoryLD.findOne);
    // Update a Tutorial with id
    router.put("/:id", categoryLD.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", categoryLD.delete);
  
    // Delete all Tutorials
    router.delete("/", categoryLD.deleteAll);
  
    app.use('/api/categoryLDs', router);
  };