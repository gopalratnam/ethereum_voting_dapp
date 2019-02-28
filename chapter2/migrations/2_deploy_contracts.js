var Voting = artifacts.require("./Voting.sol");
module.exports = function(deployer) {
  deployer.deploy(Voting, ['Rama', 'Nick', 'Jose'], {gas: 6700000});
};
/*
const Voting = artifacts.require("Voting");

module.exports = function(deployer) {
 deployer.deploy(Voting, ['Rama', 'Nick', 'Jose'].map(name => web3.utils.asciiToHex(name)));
};
*/
