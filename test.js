const Web3 = require("web3");
var Mycontract = require("./build/contracts/MyContract.json");

var init = async () => {
  const web3 = new Web3("http://localhost:9545");
  const id = await web3.eth.net.getId();
  const deployedNetwork = Mycontract.networks[id];

  const contract = new web3.eth.Contract(
    Mycontract.abi,
    deployedNetwork.address
  );
  const addresses = await web3.eth.getAccounts();

  await contract.methods.sendEther().send({
    from: addresses[0],
    value: '1000000000'
  });

  console.log(await contract.methods.functionCalled().call());

  await web3.eth.sendTransaction({
    from: addresses[0],
    to: contract.options.address,
    value: '1000000'
  });

  console.log(await contract.methods.functionCalled().call());


  const testl = await web3.eth.sendTransaction({
    from: addresses[0],
    to: addresses[1],
    value: '1000000'
  });
  console.log(testl);


}
init();
