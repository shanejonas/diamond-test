
import React, { useEffect } from "react";
import { ethers } from "ethers";
import diamondLoupeFacetArtifact from './artifacts/contracts/facets/DiamondLoupeFacet.sol/DiamondLoupeFacet.json';

// Diamond Contract Address
const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

const App = () => {
  const main = async () => {
    let provider = new ethers.providers.Web3Provider((window as any).ethereum);
    let contract = new ethers.Contract(CONTRACT_ADDRESS, diamondLoupeFacetArtifact.abi, provider);
    const facets = await contract.facets();
    console.log('facets', facets);
  }
  useEffect(() => {
    main();
  }, [])
  return (
    <div>foo</div>
  )
};

export default App;
