var express = require("express");

//set up router
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Create all our routes 
router.get("/", function (req, res) {
    db.burger.findAll({}).then(function(database) {
        var hbsObject = {
            burgers: database
        };
        
        //send our root html files with the burgers from our db
        res.render("index", hbsObject);
    });
});
    
    
    

//this call allows user to view burgers in db from our html page
router.get("/api/burgers", function (req, res) {
    db.burger.findAll({}).then(function(database) {
        var hbsObject = {
            burgers: database
        };
        
        //send our root html files with the burgers from our db
        res.send(hbsObject);
    });
});

//adding a new burger
router.post("/api/burgers", function (req, res) {
    db.burger.create({
        burger_name: req.body.burger_name,
        devoured: false,
        burger_image: req.body.burger_image
    }).then(function(result){
        res.json(result);
    })
});

//allows client to change 'devoured' status
router.put("/api/burgers/:id", function (req, res) {
    db.burger.update({
        devoured: 1
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(result) {
        res.json(result);
    })
});

//allows user to delete any burger whether deleted or not (taking CRUD full circle)
router.delete("/api/burgers/:id", function (req, res) {
    db.burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(result) {
        res.json(result);
    })
});
// Export routes for server.js to use.
module.exports = router;


