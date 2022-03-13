import {
    gql
} from "@apollo/client";

const GetBlocksQuery = gql`
{
  blocks{
      hash
      height
      time
      block_index
  }
}`


const getBlockDetailsQuery = gql`
    query blockDetails($id: ID){
        blockDetails(id: $id) {
            hash
            ver
            prev_block
            mrkl_root
            time
            bits
            fee
            nonce
            n_tx
            size
            block_index
            main_chain
            height
            weight
        }
    }
`;

export {GetBlocksQuery, getBlockDetailsQuery}
