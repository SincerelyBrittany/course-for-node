// const path = require("path");
import * as path from "path";
import express from "express";
// const express = require("express");
import hbs from "hbs";
// const hbs = require("hbs");
const app = express();
const port = 3000;

import Geocode from "./utils/geocode.js";
import Forecast from "./utils/forecast.js";

console.log(path.__dirname, "dirname"); // https://bobbyhadz.com/blog/javascript-dirname-is-not-defined-in-es-module-scope
console.log(path.__filename, "filename");

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//app.set is defined in https://www.npmjs.com/package/hbs
//SetUp handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "SincerelyBrittany",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "SincerelyBrittany",
  });
});

app.get("/weather", (req, res) => {
  const address = req.query.address;
  if (!address) {
    return res.send({
      error: "You must provide an address!",
    });
  }

  Geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    // const { latitude, longitude, location } = response;

    Forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });

  res.send({
    forecast: forecastData,
    location,
    address: req.query.address,
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  console.log(req.query);
  // Visit localhost:3000/products?search=games&rating=5
  // You should see rating and games in terminal

  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text.",
    title: "Help",
    name: "SincerelyBrittany",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "SincerelyBrittany",
    errorMessage: "Help article not found.",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "SincerelyBrittany",
    errorMessage: "Page not found.",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
