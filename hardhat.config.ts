import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
		version: '0.8.9',
		settings: {
			optimizer: {
				enabled: true,
				runs: 1000,
			},
		},
	},
	networks: {
		polygonMainnet: {
			url: process.env.ALCHEMY_POLYGON_ENDPOINT,
			accounts: [process.env.PRIVATE_KEY!]
		},
		polygonMumbai: {
			url: process.env.ALCHEMY_MUNBAI_ENDPOINT,
			accounts: [process.env.PRIVATE_KEY!]
		}
	},
	etherscan: {
		apiKey: {
			polygon: process.env.POLYGONSCAN_KEY!,
			polygonMumbai: process.env.POLYGONSCAN_MUMBAI_KEY!,
		},
	},
};

export default config;
