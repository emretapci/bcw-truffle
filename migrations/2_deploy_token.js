const EmreToken = artifacts.require("./EmreToken");

module.exports = function (deployer) {
	deployer.deploy(EmreToken, 'Emre Token', 'EMT');
};
