import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0x3A76a1235CbbF5De7260e9B5f443E6c0DD5ce9C2';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}