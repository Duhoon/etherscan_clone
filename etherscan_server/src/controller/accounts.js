const apiURL = require("./apiURL.js");

module.exports = {
    getBalanceOf : (req, res)=>{
        const params = req.body;
        // apiURL.params.append("module", "account");
        // apiURL.params.append("action", "balance");
        // apiURL.params.append("address", "params.address");
        // apiURL.params.append("tag", "latest");
        // apiURL.params.append("apikey", process.env.ETHERSCAN_API_KEY)

        console.log(apiURL.parsedURL.toString());

        return res.status(200).send(apiURL.parsedURL.toString());
    }
}