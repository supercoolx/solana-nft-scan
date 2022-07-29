import { Metaplex } from "@metaplex-foundation/js";
import { Connection } from "@solana/web3.js";

const connection = new Connection("https://solana-api.projectserum.com");
const metaplex = new Metaplex(connection);

const main = async () => {
    const nfts = await metaplex.nfts().
}

main();