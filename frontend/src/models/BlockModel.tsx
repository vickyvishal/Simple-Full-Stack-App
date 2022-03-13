export interface BlockModel {
    hash: string,
    height: number,
    time: number,
    block_index: number,
}

export interface BlockModelQuery {
    blocks: Array<BlockModel>
}

export interface QueriedBlockDeatailsModel {
    blockDetails: {
        hash: string,
        ver: number,
        prev_block: string,
        mrkl_root: string,
        time: number,
        bits: number,
        // next_block:number,
        fee: number,
        nonce: number,
        n_tx: number,
        size: number,
        block_index: number,
        main_chain: number,
        height: number,
        weight: number,
    }
}