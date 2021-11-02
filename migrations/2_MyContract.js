const MyContract = artifacts.require("Mycontract");

module.exports = function (deployer) {
  deployer.deploy(MyContract);
};
