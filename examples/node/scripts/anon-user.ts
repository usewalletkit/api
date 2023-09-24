import { WalletKit, WalletKitClient } from "walletkit";

let wk = new WalletKitClient({
  environment: process.env.WALLETKIT_ENVIRONMENT,
  projectId: process.env.WALLETKIT_PROJECT_ID as string,
});

const session = await wk.users.loginAnonymously();
console.log("Logged user in:", session)

await wk.wallets.create({
  controlMode: "user",
  name: "My wallet",
  network: WalletKit.Network.Base,
  userPin: "123456",
})

const wallets = await wk.wallets.list({ network: WalletKit.Network.Base });

console.log(wallets);
