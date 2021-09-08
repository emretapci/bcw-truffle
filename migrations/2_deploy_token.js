const EmreToken = artifacts.require("./EmreToken");
const EmreTokenn = artifacts.require("./EmreTokenn");

module.exports = function (deployer) {
	deployer.deploy(EmreToken, 'Emre Token', 'EMT');
	deployer.deploy(EmreTokenn, 'Emre Tokenn', 'EMN');
};
