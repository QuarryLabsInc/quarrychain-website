import { assetPaths } from "../../../../../../../common/constants";
import { AppTheme } from "../../../../../../../global/theme";

export function handleSliderContentColor(step: number): string {
  if (step === 1 || step === 4) return AppTheme.colors.regular["lightRed"];
  if (step === 2 || step === 5) return AppTheme.colors.regular["lightGreen"];
  return AppTheme.colors.regular["lightBlue"];
}

export function handleSliderContentTitle(step: number): string {
  switch (step) {
    case 1:
      return "Quarry Wallet";
    case 2:
      return "Quarry (QRY)";
    case 3:
      return "QuarrySwap";
    case 4:
      return "Tokenization of Real-World Assets";
    default:
      return "";
  }
}

export function handleSliderContentDescription(step: number): string {
  switch (step) {
    case 1:
      return "QuarryWallet is the official, self-custodial digital asset gateway for the QuarryChain ecosystem. Designed for both power users and newcomers to decentralized finance, QuarryWallet provides a secure, intuitive, and high-performance interface for managing your digital wealth without ever giving up control of your private keys.Maintained and developed by QuarryLabs, QuarryWallet is engineered to be the primary touchpoint for the Quarry (QRY) utility token and the broader QRC-20 ecosystem.";
    case 2:
      return "Quarry is the official cryptocurrency and utility token for the QuarryChain Network. Quarry aims to be a peer-to-peer digital currency that will enable lightning fast low cost transactions to anyone in the world. Quarry will also be used to access and connect the entire QuarryChain Ecosystem, with an abundance of application scenarios that power transactions and applications on the chain.";
    case 3:
      return "QuarrySwap is a decentralized exchange (DEX, for short), and one of QuarryChain's first Applications. QuarrySwap also happens to be non-custodial, meaning that unlike centralized exchanges, QuarrySwap does not need to possess your tokens in order for you to be able to trade them. QuarrySwap allows users to safely and securely stake a variety of cryptocurrencies and tokenized real world assets.";
    case 4:
      return "QuarryChain enables tokenization of assets in a variety of industries to create vast liquidity across the whole global asset market. QuarrySwap can turn almost any asset, real or virtual, into a digital token to be owned, traded, transferred, or stored without the use of a central third-party or intermediary. QuarryChain’s Native Smart Contracts power QuarrySwap’s tokenization features and associated digital assets.";
    default:
      return "";
  }
}

export function handleSliderContentImage(step: number): string {
  switch (step) {
    case 1:
      return assetPaths.QUARRY_WALLET;
    case 2:
      return assetPaths.BLOCK_EXPLORER;
    case 3:
      return assetPaths.QUARRY_IMAGE;
    case 4:
      return assetPaths.ASSETS_SYMBOL_HEXAGON;
    default:
      return assetPaths.QUARRY_WALLET;
  }
}
