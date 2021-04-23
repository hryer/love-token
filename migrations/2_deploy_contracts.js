var LoveToken = artifacts.require("LoveToken");

module.exports = function(deployer) {
  deployer.deploy(LoveToken, "LoveToken", "HLT", 1000);
};