require("dotenv").config();
const URL = require("node:url");

const apiURL = function(){
    const requestURL = process.env.ETHERSCAN_API_URL;
    this.parsedURL = new URL(requestURL);
    this.params = new URL.URLSearchParams(this.parsedURL);
}

module.exports = apiURL;
