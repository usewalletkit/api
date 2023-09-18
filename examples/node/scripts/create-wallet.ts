import { WalletKit, WalletKitClient } from "@walletkit-fern/api";

const wk = new WalletKitClient({
  environment: process.env.WALLETKIT_ENVIRONMENT,
  projectId: process.env.WALLETKIT_PROJECT_ID as string,
  token: process.env.WALLETKIT_TOKEN,
});

const wallet = await wk.wallets.create({
  network: WalletKit.Network.Base,
  name: 'My Wallet',
  controlMode: WalletKit.WalletControlMode.User,
  userPin: '123456',
  ownerId: 'user-1'
})

console.log(wallet);
