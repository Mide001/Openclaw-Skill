import { createPublicClient, http } from "viem";
import { base } from "viem/chains";

async function main() {
    const client = createPublicClient({
        chain: base,
        transport: http()
    });

    try {
        const [blockNumber, gasPrice, chainId] = await Promise.all([
            client.getBlockNumber(),
            client.getGasPrice(),
            client.getChainId()
        ]);

        console.log(`Base Network Status ----------------- \nChain ID: ${chainId}\nBlock Number: ${blockNumber}\nGas Price: ${(Number(gasPrice) / 1e9).toFixed(4)} Gwei\n-------------------------------------\nConnection: Stable`)
    } catch (error) {
        console.error("Error fetching network data: ", error)
        process.exit(1)
    }
}

main()
