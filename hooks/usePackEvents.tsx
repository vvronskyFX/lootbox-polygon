import { ethers } from "ethers";
import type { ContractInterface } from "ethers";
import { useEffect } from "react";
import { packAddress } from "../lib/contractAddresses";
import packABI from "../utils/PackABI.json";
import { useWeb3 } from "@3rdweb/hooks";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function usePackEvents() {
  const { address, provider } = useWeb3();

  useEffect(() => {
    if (provider) {
      const abi = packABI as ContractInterface;
      const packContract = new ethers.Contract(packAddress, abi, provider);
      packContract.on("TransferSingle", (_operator, _from, to, _id, _value) => {
        if (to === address) {
          console.log("We received a pack!")
        }
      });
    }
  }, [!!provider]);
}