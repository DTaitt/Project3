const express = require('express');
const locationController = require('../controller/locationController');
const authHelpers = require('../services/auth/authHelpers')

const locationRoutes = express.Router();

locationRoutes.get('/',locationController.images);
locationRoutes.get('/reviews',locationController.reviews);

// Bronx Routes
locationRoutes.get('/bronxfood',locationController.bronxR);
locationRoutes.get('/bronxfashion',locationController.bronxF);
locationRoutes.get('/bronxnight',locationController.bronxN);

// Brooklyn Routes
locationRoutes.get('/brooklynfood',locationController.brooklynR);
locationRoutes.get('/brooklynfashion',locationController.brooklynF);
locationRoutes.get('/brooklynnight',locationController.brooklynN);

// Manhattan Routes
locationRoutes.get('/manhattanfood',locationController.manhattanR);
locationRoutes.get('/manhattanfashion',locationController.manhattanF);
locationRoutes.get('/manhattannight',locationController.manhattanN);

// Queens Routes
locationRoutes.get('/queensfood',locationController.queensR);
locationRoutes.get('/queensfashion',locationController.queensF);
locationRoutes.get('/queensnight',locationController.queensN);

//Staten Island Routes
locationRoutes.get('/sifood',locationController.siR);
locationRoutes.get('/sifashion',locationController.siF);
locationRoutes.get('/sinight',locationController.siN);


module.exports = locationRoutes;