const express = require("express");
const locations = require("../models/locations");
const restaurants = require("../models/resturants");
const mealtypes = require("../models/mealtypes");
const menuitems = require("../models/menuItem");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("This is home page");
  // res.render("home")
});
routes.get("/getAllLocations", async (req, res) => {
  let abc = await locations.find({});
  res.send(abc);
});
routes.get("/getAllRestaurants", async (req, res) => {
  let abc = await restaurants.find({});
  res.send(abc);
});
routes.get("/getAllMealTypes", async (req, res) => {
  let abc = await mealtypes.find({});
  res.send(abc);
});

routes.get(
  "/getMenuItemsBasedOnRestaurantName/:restaurantName",
  async (req, res) => {
    let abc = await menuitems.find({
      restaurant_name: req.params.restaurantName,
    });
    res.send(abc);
  }
);
routes.get("/getRestaurantsByCity/:city", async (req, res) => {
  let abc = await restaurants.find({ city: req.params.city });
  res.send(abc);
});
routes.get("/getRestaurantsById/:id", async (req, res) => {
  let abc = await restaurants.find({ _id: req.params.id });
  res.send(abc);
});
routes.get("/getRestaurantsByMealTypeID/:mealtype_id", async (req, res) => {
  let abc = await restaurants.find({ mealtype_id: req.params.mealtype_id });
  res.send(abc);
});

routes.get(
  "/getRestaurantsByMealTypeID/:mealtype_id/:location_id",
  async (req, res) => {
    let abc = await restaurants.find({
      $and: [
        { mealtype_id: req.params.mealtype_id },
        { location_id: req.params.location_id },
      ],
    });
    res.send(abc);
  }
);
routes.get(
  "/getFilteredRestaurants/:mealtype_id/:cuisine_id/:location_id",
  async (req, res) => {
    let abc = await restaurants.find({
      $and: [
        { mealtype_id: req.params.mealtype_id },
        { location_id: req.params.location_id },
        { "cuisine.id": req.params.cuisine_id },
      ],
    });
    res.send(abc);
  }
);
routes.get(
  "/getFilteredRestaurants/:mealtype_id/:cuisine_id",
  async (req, res) => {
    let abc = await restaurants.find({
      $and: [
        { mealtype_id: req.params.mealtype_id },
        { "cuisine.id": req.params.cuisine_id },
      ],
    });
    res.send(abc);
  }
);

routes.get(
  "/getFilteredRestaurants/:mealtype_id/:cuisine_id/:location_id/:hCost/:lCost",
  async (req, res) => {
    let abc = await restaurants.find({
      $and: [
        { mealtype_id: req.params.mealtype_id },
        { location_id: req.params.location_id },
        { "cuisine.id": req.params.cuisine_id },
        { min_price: { $gt: req.params.lCost, $lt: req.params.hCost } },
      ],
    });
    res.send(abc);
  }
);
routes.get(
  "/getFilteredRestaurantss/:mealtype_id/:hCost/:lCost",
  async (req, res) => {
    let abc = await restaurants.find({
      $and: [
        { mealtype_id: req.params.mealtype_id },
        { min_price: { $gt: req.params.lCost, $lt: req.params.hCost } },
      ],
    });
    res.send(abc);
  }
);

routes.get(
  "/getFilteredRestaurantsl/:mealtype_id/:location_id/:hCost/:lCost",
  async (req, res) => {
    let abc = await restaurants.find({
      $and: [
        { mealtype_id: req.params.mealtype_id },
        { location_id: req.params.location_id },

        { min_price: { $gt: req.params.lCost, $lt: req.params.hCost } },
      ],
    });
    res.send(abc);
  }
);
routes.get(
  "/getFilteredRestaurantsc/:mealtype_id/:cuisine_id/:hCost/:lCost",
  async (req, res) => {
    let abc = await restaurants.find({
      $and: [
        { mealtype_id: req.params.mealtype_id },
        { "cuisine.id": req.params.cuisine_id },
        { min_price: { $gt: req.params.lCost, $lt: req.params.hCost } },
      ],
    });
    res.send(abc);
  }
);

routes.get("/getRestaurantsByLocationTypeID/:location_id", async (req, res) => {
  let abc = await restaurants.find({ location_id: req.params.location_id });
  res.send(abc);
});
routes.get("/getRestaurantsByLocality/:locality", async (req, res) => {
  let abc = await restaurants.find({ locality: req.params.locality });
  res.send(abc);
});
routes.get(
  "/getRestaurantsByMin_price/:mealtype_id/:cuisine_id/:location_id/:sort_no",
  async (req, res) => {
    let abc = await restaurants
      .find({
        $and: [
          { mealtype_id: req.params.mealtype_id },
          { location_id: req.params.location_id },
          { "cuisine.id": req.params.cuisine_id },
        ],
      })
      .sort({ min_price: req.params.sort_no });
    res.send(abc);
  }
);
routes.get(
  "/getRestaurantsByMin_price/:mealtype_id/:cuisine_id/:location_id/:sort_no",
  async (req, res) => {
    let abc = await restaurants
      .find({
        $and: [
          { mealtype_id: req.params.mealtype_id },
          { location_id: req.params.location_id },
          { "cuisine.id": req.params.cuisine_id },
        ],
      })
      .sort({ min_price: req.params.sort_no });
    res.send(abc);
  }
);
routes.get(
  "/getRestaurantsByMin_pricehl/:mealtype_id/:hCost/:lCost/:sort_no",
  async (req, res) => {
    let abc = await restaurants
      .find({
        $and: [
          { mealtype_id: req.params.mealtype_id },
          { min_price: { $gt: req.params.lCost, $lt: req.params.hCost } },
        ],
      })
      .sort({ min_price: req.params.sort_no });
    res.send(abc);
  }
);
//!
routes.get(
  "/getRestaurantsByMin_pricehlcl/:mealtype_id/:hCost/:lCost/:sort_no/:cuisine_id/:location_id",
  async (req, res) => {
    let abc = await restaurants
      .find({
        $and: [
          { mealtype_id: req.params.mealtype_id },
          { min_price: { $gt: req.params.lCost, $lt: req.params.hCost } },
          { location_id: req.params.location_id },
          { "cuisine.id": req.params.cuisine_id },
        ],
      })
      .sort({ min_price: req.params.sort_no });
    res.send(abc);
  }
);
routes.get(
  "/getRestaurantsByMin_pricehlc/:mealtype_id/:hCost/:lCost/:sort_no/:cuisine_id",
  async (req, res) => {
    let abc = await restaurants
      .find({
        $and: [
          { mealtype_id: req.params.mealtype_id },
          { min_price: { $gt: req.params.lCost, $lt: req.params.hCost } },

          { "cuisine.id": req.params.cuisine_id },
        ],
      })
      .sort({ min_price: req.params.sort_no });
    res.send(abc);
  }
);
routes.get(
  "/getRestaurantsByMin_pricehll/:mealtype_id/:hCost/:lCost/:sort_no/:location_id",
  async (req, res) => {
    let abc = await restaurants
      .find({
        $and: [
          { mealtype_id: req.params.mealtype_id },
          { min_price: { $gt: req.params.lCost, $lt: req.params.hCost } },
          { location_id: req.params.location_id },
        ],
      })
      .sort({ min_price: req.params.sort_no });
    res.send(abc);
  }
);
routes.get(
  "/getRestaurantsByMin_pricel/:mealtype_id/:sort_no/:location_id",
  async (req, res) => {
    let abc = await restaurants
      .find({
        $and: [
          { mealtype_id: req.params.mealtype_id },
          { location_id: req.params.location_id },
        ],
      })
      .sort({ min_price: req.params.sort_no });
    res.send(abc);
  }
);
routes.get(
  "/getRestaurantsByMin_pricec/:mealtype_id/:sort_no/:cuisine_id",
  async (req, res) => {
    let abc = await restaurants
      .find({
        $and: [
          { mealtype_id: req.params.mealtype_id },
          { "cuisine.id": req.params.cuisine_id },
        ],
      })
      .sort({ min_price: req.params.sort_no });
    res.send(abc);
  }
);
routes.get(
  "/getRestaurantsByMin_price/:mealtype_id/:sort_no",
  async (req, res) => {
    let abc = await restaurants
      .find({ mealtype_id: req.params.mealtype_id })
      .sort({ min_price: req.params.sort_no });
    res.send(abc);
  }
);

module.exports = routes;
