const Location = require('../models/locationModel');
const Yelp = require('node-yelp-api-v3');
require('dotenv').config();

const locationController = {};

locationController.reviews = (req,res) => {
  Location.findReviews()
    .then(review => {
      res.json({
        data: {review}
      });
    })
      .catch(err => {
      console.log(err);
      res.status(400).json({message: '400', err})
    });
};

locationController.images = (req,res) => {
  Location.findImage()
    .then(image => {
      res.json({
        data: {image}
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({message: '400',err})
    })
}

//bronx fetches

locationController.bronxR = (req,res) => {
  const yelp = new Yelp({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
  });
  const boroughData= [];

function searchLocations() {
	yelp.searchBusiness({ 
		location: 'bronx',
		sort_by: 'rating',
		price: '1', 
		categories: 'restaurants',
	})
		.then((yelpData) => {
      res.json({
        data: {yelpData}
      })
			boroughData.push(yelpData);
			console.log(boroughData);
		})
 }
 searchLocations()
}

locationController.bronxF = (req,res) => {
  const yelp = new Yelp({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
  });
  const boroughData= [];

function searchLocations() {
	yelp.searchBusiness({ 
		location: 'bronx',
		sort_by: 'rating',
		price: '1', 
		categories: 'fashion',
	})
		.then((yelpData) => {
      res.json({
        data: {yelpData}
      })
			boroughData.push(yelpData);
			console.log(boroughData);
		})
 }
 searchLocations()
}

locationController.bronxN = (req,res) => {
  const yelp = new Yelp({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
  });
  const boroughData= [];

function searchLocations() {
	yelp.searchBusiness({ 
		location: 'bronx',
		sort_by: 'rating',
		price: '1', 
		categories: 'nightlife',
	})
		.then((yelpData) => {
      res.json({
        data: {yelpData}
      })
			boroughData.push(yelpData);
			console.log(boroughData);
		})
 }
 searchLocations()
}

//brooklyn fetches

locationController.brooklynR = (req,res) => {
  const yelp = new Yelp({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
  });
  const boroughData= [];

function searchLocations() {
	yelp.searchBusiness({ 
		location: 'brooklyn',
		sort_by: 'rating',
		price: '1', 
		categories: 'restaurants',
	})
		.then((yelpData) => {
      res.json({
        data: {yelpData}
      })
			boroughData.push(yelpData);
			console.log(boroughData);
		})
 }
 searchLocations()
}

locationController.brooklynF = (req,res) => {
  const yelp = new Yelp({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
  });
  const boroughData= [];

function searchLocations() {
	yelp.searchBusiness({ 
		location: 'brooklyn',
		sort_by: 'rating',
		price: '1', 
		categories: 'fashion',
	})
		.then((yelpData) => {
      res.json({
        data: {yelpData}
      })
			boroughData.push(yelpData);
			console.log(boroughData);
		})
 }
 searchLocations()
}

locationController.brooklynN = (req,res) => {
  const yelp = new Yelp({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
  });
  const boroughData= [];

function searchLocations() {
	yelp.searchBusiness({ 
		location: 'brooklyn',
		sort_by: 'rating',
		price: '1', 
		categories: 'nightlife',
	})
		.then((yelpData) => {
      res.json({
        data: {yelpData}
      })
			boroughData.push(yelpData);
			console.log(boroughData);
		})
 }
 searchLocations()
}

//manhattan fetches

locationController.manhattanR = (req,res) => {
  const yelp = new Yelp({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
  });
  const boroughData= [];

function searchLocations() {
	yelp.searchBusiness({ 
		location: 'manhattan',
		sort_by: 'rating',
		price: '1', 
		categories: 'restaurants',
	})
		.then((yelpData) => {
      res.json({
        data: {yelpData}
      })
			boroughData.push(yelpData);
			console.log(boroughData);
		})
 }
 searchLocations()
}

locationController.manhattanF = (req,res) => {
  const yelp = new Yelp({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
  });
  const boroughData= [];

function searchLocations() {
	yelp.searchBusiness({ 
		location: 'manhattan',
		sort_by: 'rating',
		price: '1', 
		categories: 'fashion',
	})
		.then((yelpData) => {
      res.json({
        data: {yelpData}
      })
			boroughData.push(yelpData);
			console.log(boroughData);
		})
 }
 searchLocations()
}

locationController.manhattanN = (req,res) => {
  const yelp = new Yelp({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
  });
  const boroughData= [];

function searchLocations() {
	yelp.searchBusiness({ 
		location: 'manhattan',
		sort_by: 'rating',
		price: '1', 
		categories: 'nightlife',
	})
		.then((yelpData) => {
      res.json({
        data: {yelpData}
      })
			boroughData.push(yelpData);
			console.log(boroughData);
		})
 }
 searchLocations()
}

//queens fetch

locationController.queensR = (req,res) => {
  const yelp = new Yelp({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
  });
  const boroughData= [];

function searchLocations() {
	yelp.searchBusiness({ 
		location: 'queens',
		sort_by: 'rating',
		price: '1', 
		categories: 'restaurants',
	})
		.then((yelpData) => {
      res.json({
        data: {yelpData}
      })
			boroughData.push(yelpData);
			console.log(boroughData);
		})
 }
 searchLocations()
}

locationController.queensF = (req,res) => {
  const yelp = new Yelp({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
  });
  const boroughData= [];

function searchLocations() {
	yelp.searchBusiness({ 
		location: 'queens',
		sort_by: 'rating',
		price: '1', 
		categories: 'fashion',
	})
		.then((yelpData) => {
      res.json({
        data: {yelpData}
      })
			boroughData.push(yelpData);
			console.log(boroughData);
		})
 }
 searchLocations()
}

locationController.queensN = (req,res) => {
  const yelp = new Yelp({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
  });
  const boroughData= [];

function searchLocations() {
	yelp.searchBusiness({ 
		location: 'queens',
		sort_by: 'rating',
		price: '1', 
		categories: 'nightlife',
	})
		.then((yelpData) => {
      res.json({
        data: {yelpData}
      })
			boroughData.push(yelpData);
			console.log(boroughData);
		})
 }
 searchLocations()
}

//staten island fetch

locationController.siR = (req,res) => {
  const yelp = new Yelp({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
  });
  const boroughData= [];

function searchLocations() {
	yelp.searchBusiness({ 
		location: 'staten island',
		sort_by: 'rating',
		price: '1', 
		categories: 'restaurants',
	})
		.then((yelpData) => {
      res.json({
        data: {yelpData}
      })
			boroughData.push(yelpData);
			console.log(boroughData);
		})
 }
 searchLocations()
}

locationController.siF = (req,res) => {
  const yelp = new Yelp({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
  });
  const boroughData= [];

function searchLocations() {
	yelp.searchBusiness({ 
		location: 'staten island',
		sort_by: 'rating',
		price: '1', 
		categories: 'fashion',
	})
		.then((yelpData) => {
      res.json({
        data: {yelpData}
      })
			boroughData.push(yelpData);
			console.log(boroughData);
		})
 }
 searchLocations()
}

locationController.siN = (req,res) => {
  const yelp = new Yelp({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
  });
  const boroughData= [];

function searchLocations() {
	yelp.searchBusiness({ 
		location: 'staten island',
		sort_by: 'rating',
		price: '1', 
		categories: 'nightlife',
	})
		.then((yelpData) => {
      res.json({
        data: {yelpData}
      })
			boroughData.push(yelpData);
			console.log(boroughData);
		})
 }
 searchLocations()
}

module.exports = locationController