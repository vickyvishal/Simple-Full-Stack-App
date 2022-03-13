import { BlockModel } from '../models/BlockModel'
import React from 'react';
import './component.scss';
import { Link } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


function splitArrayIntoChunksOfLen(arr: BlockModel[]) {
  var chunks = [], i = 0, n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, i += 10));
  }
  return chunks;
}


export const BlockList = (props: { blocks: BlockModel[] }) => {
  const [page, setPage] = React.useState(0);

  let pageChucnkList: BlockModel[][] = splitArrayIntoChunksOfLen(props.blocks);
  const handleRightPagi = (e: any) => {
    if (page < pageChucnkList.length - 1) {
      setPage(page + 1)
    }
  };

  const handleLeftPagi = (e: any) => {
    if (page > 0) {
      setPage(page - 1)
    }
  };


  return (
    <div className='block-list'>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Hash</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Block</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Height</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Index</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              pageChucnkList[page].map((block: BlockModel) => {
                return <TableRow
                  key={block.hash}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                  <TableCell sx={{ color: "red" }}>
                    <Link to={`/blocks/${block.hash}`} style={{ color: "inherit" }}>
                      {block.hash}
                    </Link>
                  </TableCell>


                  <TableCell sx={{ color: "red" }}>{block.block_index}</TableCell>
                  <TableCell>{block.height}</TableCell>
                  <TableCell>{block.time}</TableCell>
                </TableRow>
              })
            }

            <div className='table-pagination' >
              <IconButton aria-label="left" name="left" onClick={(e) => handleLeftPagi(e)} >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton aria-label="right" name="right" onClick={(e) => handleRightPagi(e)} >
                <ChevronRightIcon />
              </IconButton>
              <span style={{fontWeight: "500"}}>Page  {page + 1}</span>
            </div>

          </TableBody>

        </Table>
      </TableContainer>
      {/* <Paper className='table-pagination' sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
        <IconButton aria-label="left" name="left" onClick={(e) => handleLeftPagi(e)} >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton aria-label="right" name="right" onClick={(e) => handleRightPagi(e)} >
          <ChevronRightIcon />
        </IconButton>
      </Paper> */}
    </div>
  );
}

export default BlockList