import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main() {
  // Paste in the address from when you created the bundle collection module
  const bundleModuleAddress = '0xF0EC32EA9f165C71ab25D8341964f128004121A1';
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log('Creating NFT batch...');

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: 'BMW M5',
        description: 'A fancy car to enjoy cruising!',
        image: readFileSync('./assets/bmw-m5.jpeg'),
        properties: {
          rarity: 'common',
          fanciness: 5,
        }
      },
      supply: 50,
    },
    {
      metadata: {
        name: 'Dodge Hellcat',
        description: 'A quick car, ready for drifting!',
        image: readFileSync('./assets/dodge-hellcat.jpeg'),
        properties: {
          rarity: 'less common',
          fanciness: 7,
        }
      },
      supply: 40,
    },
    {
      metadata: {
        name: 'Ferrari F12 Berlinetta',
        description: 'A super fancy car!',
        image: readFileSync('./assets/ferrarif12-berlinetta.jpeg'),
        properties: {
          rarity: 'slightly rare!',
          fanciness: 8,
        }
      },
      supply: 30,
    },
    {
      metadata: {
        name: 'Range Rover Sport SVR',
        description: 'A european BEAST!',
        image: readFileSync('./assets/rangerover-svr.jpeg'),
        properties: {
          rarity: 'slightly rare!',
          fanciness: 9,
        }
      },
      supply: 20,
    },
    {
      metadata: {
        name: 'Rolls Royce Black Badge',
        description: 'A luxury car that packs a punch!',
        image: readFileSync('./assets/rollsroyce-blackbadge.jpeg'),
        properties: {
          rarity: 'rare!',
          fanciness: 9,
        }
      },
      supply: 10,
    },
    {
      metadata: {
        name: 'Pagani Huayra',
        description: 'An exotic sports car that very few own!',
        image: readFileSync('./assets/pagani-huayra.jpeg'),
        properties: {
          rarity: 'super rare!',
          fanciness: 10,
        }
      },
      supply: 5,
    }
  ]);

  console.log('NFTs created!')
  console.log(JSON.stringify(created, null, 2));
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}