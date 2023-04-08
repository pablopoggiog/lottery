# Smart Lottery

Welcome to Smart Lottery! This dapp is built using Hardhat, Solidity, TypeScript, Web3.js, Next.js, and React. It also leverages Chainlink's VRF system to provide verifiable randomness when choosing a winner. 

## Overview

Smart Lottery allows users to enter a lottery for a chance to win the pot by purchasing a ticket. There, you'll find information such as the current lottery round number, the pot's value in ETH, and the winner from the previous round. Users can effortlessly enter the lottery by clicking on the "Enter" button, while the contract owner has the ability to initiate the random winner selection process with the "Pick Winner!" button. Once a winner is chosen, they can claim their prize by using the "Withdraw Pot" button.

Once a winner is picked, they have limited time to claim their prize. If they don't claim it before a new round starts, they lose the chance, and their prize gets added to the bounty of the new lottery round.

## Getting Started

1. Clone the repository

```
git clone https://github.com/pablopoggiog/lottery.git
cd lottery-dapp
```

2. Install the required dependencies

```
npm install
```

3. Move to the `blockchain` subdirectory and compile the contracts

```
cd blockchain && npx hardhat compile
```

4. Run the tests

```
npx hardhat test
```

5. Deploy the contracts

```
npx hardhat run scripts/deploy.js --network <network>
```

6. Update CONTRACT_ADDRESS in `utils/constants.ts`

```
export const CONTRACT_ADDRESS = "the-address-your-contract-was-just-deployed-to";
```

7.  Move back to the root and start the frontend application

```
cd .. && npm run dev
```



The dapp should now be running on `http://localhost:3000`.

## How to Use

1. Click the "Connect Wallet" button to connect your MetaMask wallet.
2. Check the current lottery round, pot amount, and last winner.
3. Click "Enter" to purchase a ticket and enter the lottery.
4. If you're the owner of the contract, click "Pick Winner!" to start the process of randomly selecting a winner (shortly, this will be deprecated and the winner-picking process automated with Chainlink automation).
5. If you win, click "Withdraw Pot" to claim your prize before the next round starts.

## Contributing

We welcome contributions to improve Smart Lottery. If you'd like to contribute, please fork the repository, create a new branch with your changes, and submit a pull request.
