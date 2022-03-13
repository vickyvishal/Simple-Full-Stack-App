import './App.css';
import React from 'react';
import { BlockModelQuery } from './models/BlockModel'
import BlockList from './components/BlockList';
import BlockDetails from './components/BlockDetails'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import { GetBlocksQuery } from './queries/queries'


import {
  useQuery
} from "@apollo/client";



function App() {
  const { loading, error, data } = useQuery<BlockModelQuery>(GetBlocksQuery);

  return (
    <Router>
      <div id="main">
        <div className='navbar'>
          <AppBar position="static" sx={{ backgroundColor: "white" }}>
            <Container sx={{ marginLeft: "inherit" }}>
              <Toolbar disableGutters>
                <img src="/nuri.svg" alt="nuri" style={{ height: "25px", width: "25px" }} />
                <Divider orientation="vertical" flexItem sx={{ margin: "15px 5px 15px 10px", backgroundColor: "red" }} />

                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                  <Link to={`/`} style={{ color: "inherit" }}>
                    {"Blocks"}
                   
                  </Link>
                </Typography>


              </Toolbar>

            </Container>
          </AppBar>

        </div>
        <section className='content'>
          <Routes>
            <Route path='/' element={data ?<BlockList blocks={data.blocks} /> : 
            <img src="/loader.svg" alt="nuri" style={{ height: "50px", width: "50px", position:"absolute",  top: "50vh", left: "50vw"}} /> } />

            <Route path="/blocks/:id" element={<BlockDetails />} />
          </Routes>
        </section>
      </div>
    </Router>
  );

}
export default App;
