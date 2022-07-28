import { Metaplex } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

const connection = new Connection("https://solana-api.projectserum.com");
const metaplex = new Metaplex(connection);

const main = async () => {
    const creator = new PublicKey("BSB412xKV5wCWuqw8GC9WJExmmzfUWMUAz8TzMacj9rP");
    const updateAuthority = new PublicKey("BRAiNSRTXfk6Rx95FAfsQVAfDctgqNR6PrYAxsa3sjhv");
    const nft = await metaplex.nfts().findAllByUpdateAuthority(updateAuthority).run();
    // const nft = await metaplex.nfts().findAllByCreator(creator).run();
    console.log(nft);
}

main();