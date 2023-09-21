import { WalletKit, WalletKitClient } from "@walletkit-fern/walletkit-node";

const wk = new WalletKitClient({
  environment: process.env.WALLETKIT_ENVIRONMENT,
  projectId: process.env.WALLETKIT_PROJECT_ID as string,
  token: process.env.WALLETKIT_TOKEN,
});

const wallets = await wk.wallets.list({
  network: WalletKit.Network.Base,
});

console.log(wallets);
