const request = require("request");
const args = process.argv.slice(2);
let breedName = args;

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
  (error, response, body) => {
    const data = JSON.parse(body);
    if (response["statusCode"] >= 400) {
      return console.log("error");
    }

    if (!data[0]) {
      return console.log("breed not found");
    }

    console.log(data[0].description);
    // console.log(typeof data);
  }
);
