import './component.scss';
import { useParams } from "react-router-dom";
import {
    useQuery
  } from "@apollo/client";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Divider from '@mui/material/Divider';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TagIcon from '@mui/icons-material/Tag';
import Filter1Icon from '@mui/icons-material/Filter1';
import HomeIcon from '@mui/icons-material/Home';
import MemoryIcon from '@mui/icons-material/Memory';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import AirIcon from '@mui/icons-material/Air';
import StorageIcon from '@mui/icons-material/Storage'; 
import ListIcon from '@mui/icons-material/List';
import HeightIcon from '@mui/icons-material/Height';
import ScaleIcon from '@mui/icons-material/Scale';

import {getBlockDetailsQuery} from '../queries/queries'
import { QueriedBlockDeatailsModel } from '../models/BlockModel'

export const BlockDetails = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery<QueriedBlockDeatailsModel>(getBlockDetailsQuery, {variables: {id}});
    const blockDetails = data?.blockDetails;
    if(blockDetails)
    return (
      <div className='block-list'>
          <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessTimeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Hash" secondary={blockDetails &&  blockDetails.hash.toString()} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <TagIcon />
              
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Version" secondary={blockDetails.ver.toString()} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <Filter1Icon />
            
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Previos Block" secondary={blockDetails.prev_block.toString()} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HomeIcon />
              
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="MRKL root" secondary={blockDetails.mrkl_root.toString()} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
              
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Time" secondary={blockDetails.time.toString()} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MemoryIcon />
              
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bits" secondary={blockDetails.bits.toString()} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MonetizationOnIcon />
              
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Fee" secondary={blockDetails.fee.toString()} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Grid3x3Icon />
              
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Nonce" secondary={blockDetails.nonce.toString()} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AirIcon />
              
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Ntx" secondary={blockDetails.n_tx.toString()} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <StorageIcon />
              
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Size" secondary={blockDetails.size.toString()} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
              
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Block Index" secondary={blockDetails.block_index.toString()} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ListIcon />
              
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Main Chain" secondary={blockDetails.main_chain.toString()} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HeightIcon />
              
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Height" sx={{color: "red"}} secondary={blockDetails.height.toString()} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ScaleIcon />
              
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Weight" secondary={blockDetails.weight.toString()} />
      </ListItem>
      
    </List>
        </div>
    )
    else return <img src="/loader.svg" alt="nuri" style={{ height: "50px", width: "50px", position:"absolute",  top: "50vh", left: "50vw"}} />
}

export default BlockDetails