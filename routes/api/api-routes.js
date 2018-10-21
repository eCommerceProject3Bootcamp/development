// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
const db = require("../../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the Items
  app.get("/api/Items/", function(req, res) {
    db.Item.findAll({})
      .then(function(dbItem) {
        res.json(dbItem);
      });
  });

  // Get route for returning Items of a specific category
  app.get("/api/Items/category/:category", function(req, res) {
    db.Item.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbItem) {
        res.json(dbItem);
      });
  });

  // Get route for retrieving a single Item
  app.get("/api/Items/:id", function(req, res) {
    db.Item.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbItem) {
        res.json(dbItem);
      });
  });

  // Item route for saving a new Item
  app.Item("/api/Items", function(req, res) {
    console.log(req.body);
    db.Item.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function(dbItem) {
        res.json(dbItem);
      });
  });

  // DELETE route for deleting Items
  app.delete("/api/Items/:id", function(req, res) {
    db.Item.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbItem) {
        res.json(dbItem);
      });
  });

  // PUT route for updating Items
  app.put("/api/Items", function(req, res) {
    db.Item.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbItem) {
        res.json(dbItem);
      });
  });
};
