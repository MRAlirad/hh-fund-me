## solhint

This is an open source project for linting Solidity code. This project provides both Security and Style Guide validations.
[solhint](https://www.npmjs.com/package/solhint)

## Hardhat Deploy

we earned in the past that if we want to deploy our contract we need to use a script for that and make our own manual deploy script.

however, we realized the more we work with just raw ethers or hardhat, keeping track of our deployments can be tricky. if your just use deploy.js script , it not saving our deployments in any file. Additionally having everything in the deploy script for deploying can make the tests and the deploy scripts, maybe not work exactly hand in hand. And there are a couple of other thigs that might be a little bit tricky to work on, there is a package that can make our life easier which is called [hardhat-deploy](https://github.com/wighawag/hardhat-deploy).

```shell
    npm install -D hardhat-deploy
```

It is also recommended to install hardhat-deploy-ethers which add extra features to access deployments as ethers contract.

```shell
    npm install --save-dev  @nomiclabs/hardhat-ethers hardhat-deploy-ethers ethers
```

after require it in your hardhat.config.js you have bunch of new tasks, that one of them is deploy

in deploy.js file, every time you run the "deploy" script using the command
``` shell
    npx hardhat deploy
```
it automatically calls the default module function ann passes the hardhat object into it ((01-depoy-fund-me.js) default export).

## Mocking
how to deploy the fund me contract.

Mocking is primarily used in unit testing. An object under test may have dependencies on other (complex) objects. To isolate the behaviour of the object you want to test you replace the other objects by mocks that simulate the behaviour of the real objects. This is useful if the real objects are impractical to incorporate into the unit test.

In short, mocking is creating objects that simulate the behaviour of real objects.
