const _ = require('lodash')
const { GraphQLObjectType,  GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } = require('graphql')
const axios = require("axios");
import GraphQLLong from 'graphql-type-long';
//GraphQLLong type because of GraphQLInt only support 32 bit [https://github.com/graphql/graphql-spec/issues/73]



const bookListUri = `https://blockchain.info/blocks/${Date.now()}?format=json`
const blockHashUri = `https://blockchain.info/rawblock/`

function fetchBlockListByUrl(bookListUri) {
    return axios.get(bookListUri).then(res => res.data);
}


function fetchBlockHashUri(hash) {
    return axios.get(`${blockHashUri}${hash}`).then(res => res.data);
}



const BlockType = new GraphQLObjectType({
    name: "Block",
    fields: () => ({
        hash: { type: GraphQLID },
        height: { type: GraphQLInt },
        time: { type: GraphQLInt },
        block_index: { type: GraphQLInt },
    })
})

const BlockHashType = new GraphQLObjectType({
    name: "BlockHash",
    fields: () => ({
        hash:{ type: GraphQLID},
        ver:{ type: GraphQLLong},
        prev_block:{ type: GraphQLID},
        mrkl_root:{ type: GraphQLID},
        time:{ type: GraphQLLong},
        bits:{ type: GraphQLLong},
        // next_block:{ type: GraphQLLong},
        fee:{ type: GraphQLLong},
        nonce:{ type: GraphQLLong},
        n_tx:{ type: GraphQLLong},
        size:{ type: GraphQLLong},
        block_index:{ type: GraphQLLong},
        main_chain:{ type: GraphQLLong},
        height:{ type: GraphQLLong},
        weight:{ type: GraphQLLong},
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        blocks: {
            type: new GraphQLList(BlockType),
            resolve: (parents, args) => fetchBlockListByUrl(bookListUri)
        },
        blockDetails: {
            type: BlockHashType,
            args:{ id: { type: GraphQLID } },
            resolve(parents, args){
                return fetchBlockHashUri(args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
})
