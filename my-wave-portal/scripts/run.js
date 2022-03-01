const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); // compiles contract and generates the necessary files to work with contracts in artifacts dir
    const waveContract = await waveContractFactory.deploy();  // create a new blockchain and deploy
    await waveContract.deployed(); // wait till contract is deployed
    console.log("Contract deployed to:", waveContract.address); //
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0); // exit Node process without error
    } catch (error) {
      console.log(error);
      process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
    // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
  };
  
  runMain();