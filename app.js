const { resolve } = require("path/posix");
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

    await contract.methods
        .emitEvent('hey')
        .send({
            from: addresses[0]
        });
    //  contract.events.MyEvent({/* fromBlock: 0 */ })
    //    .on('data', event => console.log(event));
    //  await new Promise(resolve => setTimeout(() => 2000));

    await contract.methods
        .emitEvent('hey hey')
        .send({
            from: addresses[0]
        });

    const result = await contract.getPastEvents( //reading events
        'MyEvent',
        {
            filter: {
                value: 'hey'

            },
            fromBlock: 0
        }
    );

}
init();