import React from 'react'

import { AppBar, Toolbar, Typography } from '@mui/material'

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="info" sx={{ minWidth: 600 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Wombat Dungeon Master NFT Viewer
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
