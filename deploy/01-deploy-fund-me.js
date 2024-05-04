// const deployFunc = ()=> {
//     console.log('hi')
// }

// module.exports.default = deployFunc;

module.exports = async ({getNamesAccounts, deployments}) => {
    // we have access to hre (hardhat runtime environment) when "npx hardhat deploy" script runs
    const {deploy, log} = deployments;
    const {deployer} = await getNamesAccounts();
    const chainId = network.config.chainId,
};