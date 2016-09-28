// Required modules to handle Yelp's oAuth requirement
var oauthSignature =require('oauth-signature');
var n =require('nonce');
var request =require('request');
var qs =require('querystring');
var _ =require('lodash');
var Promise =require('bluebird');

// Import sercet API keys (All 4 are needed)
// cant import from non existant file in deployment
// import Y from '../config-public/yelpconfig';
// import Y from '../config/yelpconfig';
const YELP_CONSUMER_KEY='HpCOGNCIk40BYpp8MwSUsw'
const YELP_CONSUMER_SECRET='0BOyZ9ERh2tyE5HkC1pkgtWFlqU'
const YELP_TOKEN='UaEe6RD_1DLNImDZ-Kj2kBZkyOqZ697b'
const YELP_TOKEN_SECRET='S7AiWsIXsR8Sj3GKwvh3YkbijpQ'




// Yelp Endpoints
var endpointNewPlace = 'https://api.yelp.com/v2/search';
var endpointBusID = 'https://api.yelp.com/v2/business/';

// Generate parameters for a new business
module.exports.generateYelpNewBusParam = function (name, longitude, latitude, friendWishOnly) {
  console.log('generateYelpNewBusParam called')
  return {
    term: name,
    limit: 1,
    ll: latitude + ',' + longitude,
    friendWishOnly: friendWishOnly
  };
};


// 
var parseYelpData = function (business, friendWishOnly) {
  console.log('businessss',business);
  let cuisine;
  if (business.categories && business.categories[0]) {
    cuisine = business.categories[0][0];
  } else {
    cuisine = 'food';
  }
  var imageUrl = business.image_url;
  var businessId = business.id;
  var parsed = {
    address:business.location.display_address.join(','),
    rating:business.rating,
    url:business.url,
    name: business.name,
    cuisine: cuisine,
    image: imageUrl,
    businessId: businessId,
    latitude: business.location.coordinate.latitude,
    longitude: business.location.coordinate.longitude,
    friendWishOnly: friendWishOnly
  };

  return parsed;
};


var requestYelp = function (setParameters, busId, searchBar) {
  var friendWishOnly = setParameters.friendWishOnly
  console.log('requestYelp called')
  var httpMethod = 'GET';

  if (busId) {
    var url = endpointBusID + setParameters;
  } else {
    var url = endpointNewPlace;
  }

  var defaultParameters = {};

  var requiredParameters = {
    oauth_consumer_key: YELP_CONSUMER_KEY,
    oauth_token: YELP_TOKEN,
    oauth_nonce: n()(),
    oauth_timestamp: n()().toString().substr(0, 10),
    oauth_signature_method: 'HMAC-SHA1',
    oauth_version: '1.0'
  };

  if (busId) {
    var parameters = _.assign(requiredParameters);
  } else {
    var parameters = _.assign(setParameters, requiredParameters);
  }

  var consumerSecret = YELP_CONSUMER_SECRET;
  var tokenSecret = YELP_TOKEN_SECRET;
  // Call Yelp servers for a oAuth signature (only good for 300 sec)
  var signature = oauthSignature.generate(
    httpMethod,
    url,
    parameters,
    consumerSecret,
    tokenSecret,
    {encodeSignature: false}
  );

  parameters.oauth_signature = signature;
  console.log('parameters', parameters);
  var paramUrl = qs.stringify(parameters);

  var apiUrl = url + '?' + paramUrl;

  return new Promise((resolve, reject) => {
    // console.log(apiUrl);
    request(apiUrl, function(err, res, body) {
       console.log('yelp res', err, JSON.parse(body));
      if (err) {
        console.log('**********************************');
        console.log('ERROR', err);
        reject(err);
      }

      var data = JSON.parse(body);
      // console.log('returning data', data);
      if (busId) {
        resolve(parseYelpData(data, friendWishOnly));
      } else if (data.businesses.length > 0) {
        if (searchBar) {
          resolve(data.businesses.map(business => parseYelpData(business, friendWishOnly)));
        } else {
          resolve(parseYelpData(data.businesses[0], friendWishOnly));
        }
      } else {
        resolve();
      }
    });
  });

};






















// Yelp call
module.exports.requestYelp = function (setParameters, busId, searchBar) {
  var friendWishOnly = setParameters.friendWishOnly
  console.log('requestYelp called')
  var httpMethod = 'GET';

  if (busId) {
    var url = endpointBusID + setParameters;
  } else {
    var url = endpointNewPlace;
  }

  var defaultParameters = {};

  var requiredParameters = {
    oauth_consumer_key: YELP_CONSUMER_KEY,
    oauth_token: YELP_TOKEN,
    oauth_nonce: n()(),
    oauth_timestamp: n()().toString().substr(0, 10),
    oauth_signature_method: 'HMAC-SHA1',
    oauth_version: '1.0'
  };

  if (busId) {
    var parameters = _.assign(requiredParameters);
  } else {
    var parameters = _.assign(setParameters, requiredParameters);
  }

  var consumerSecret = YELP_CONSUMER_SECRET;
  var tokenSecret = YELP_TOKEN_SECRET;
  // Call Yelp servers for a oAuth signature (only good for 300 sec)
  var signature = oauthSignature.generate(
    httpMethod,
    url,
    parameters,
    consumerSecret,
    tokenSecret,
    {encodeSignature: false}
  );

  parameters.oauth_signature = signature;
  console.log('parameters', parameters);
  var paramUrl = qs.stringify(parameters);

  var apiUrl = url + '?' + paramUrl;

  return new Promise((resolve, reject) => {
    // console.log(apiUrl);
    request(apiUrl, function(err, res, body) {
       console.log('yelp res', err, JSON.parse(body));
      if (err) {
        console.log('**********************************');
        console.log('ERROR', err);
        reject(err);
      }

      var data = JSON.parse(body);
      // console.log('returning data', data);
      if (busId) {
        resolve(parseYelpData(data, friendWishOnly));
      } else if (data.businesses.length > 0) {
        if (searchBar) {
          resolve(data.businesses.map(business => parseYelpData(business, friendWishOnly)));
        } else {
          resolve(parseYelpData(data.businesses[0], friendWishOnly));
        }
      } else {
        resolve();
      }
    });
  });

};

// Multiple requests for businessId array
module.exports.requestMultipleYelp = function(yelpParams) {
  return Promise.all(yelpParams.map((yelpParam) => {
    return requestYelp(yelpParam);
  }));
  // busIds.forEach(function(busId) {
  //   requestYelp(busId, true)
  //   .then((data) => {
  //     compiledData.push(data);
  //     if (compiledData.length === busIds.length) {
  //       compiledData;
  //     }
  //   });
  // });
};

// Parse required data out of Yelp's response data
module.exports.parseYelpData = function (business, friendWishOnly) {
  console.log('businessss',business);
  let cuisine;
  if (business.categories && business.categories[0]) {
    cuisine = business.categories[0][0];
  } else {
    cuisine = 'food';
  }
  var imageUrl = business.image_url;
  var businessId = business.id;
  var parsed = {
    address:business.location.display_address.join(','),
    rating:business.rating,
    url:business.url,
    name: business.name,
    cuisine: cuisine,
    image: imageUrl,
    businessId: businessId,
    latitude: business.location.coordinate.latitude,
    longitude: business.location.coordinate.longitude,
    friendWishOnly: friendWishOnly
  };

  return parsed;
};
