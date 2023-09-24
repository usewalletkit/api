import { WalletKit, WalletKitClient } from "walletkit";

const wk = new WalletKitClient({
  environment: process.env.WALLETKIT_ENVIRONMENT,
  projectId: process.env.WALLETKIT_PROJECT_ID as string,
  token: process.env.WALLETKIT_TOKEN,
});

const wallet = await wk.wallets.getByOwnerId({
  network: WalletKit.Network.Base,
  ownerId: "user-1"
});

console.log(wallet);
