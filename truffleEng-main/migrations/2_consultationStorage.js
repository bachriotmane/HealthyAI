var consultation = artifacts.require("./consultation.sol");

module.exports = function (deployer) {
  deployer.deploy(consultation); 
};
