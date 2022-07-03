import { initializeConnector } from "@web3-react/core"
import { MetaMask } from "@web3-react/metamask"

export const [metamask, hooks] = initializeConnector<MetaMask>(
  (actions: any) => new MetaMask({ actions, options: { silent: true } })
)