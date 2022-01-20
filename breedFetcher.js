const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      const data = JSON.parse(body);
      if (response["statusCode"] >= 400) {
        return callback("error " + response["statusCode"], null);
      }

      if (!data[0]) {
        return callback("Breed not Found", null);
      }

      return callback(null, data[0].description);
      // console.log(typeof data);
    }
  );
};

module.exports = { fetchBreedDescription };
