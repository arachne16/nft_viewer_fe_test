import React from 'react'

import { Box, Grid, Container, Paper } from '@mui/material'

import { NFTCard } from './NFTCard'
import { INFTAsset } from '../../types/atomicassets'

interface NFTGridProps {
  nfts: INFTAsset[]
}

const NFTGrid: React.FC<NFTGridProps> = ({ nfts }) => {
  // FUNCTION to transform the API response into grouped NFTs by collection
  const nftsByCollection = nfts.reduce<Record<string, INFTAsset[]>>(
    (acc: Record<string, INFTAsset[]>, nft: INFTAsset) => {
      acc[nft.collection.name] = acc[nft.collection.name] || []
      acc[nft.collection.name].push(nft)
      return acc
    },
    {}
  )

  if (Object.keys(nftsByCollection).length === 0) return <h1>No data.</h1>

  return (
    <Box>
      {Object.keys(nftsByCollection).map((collectionName) => (
        <Paper
          key={collectionName}
          elevation={3}
          sx={{ paddingY: 2, marginY: 2, minWidth: 600 }}
        >
          <Container maxWidth="lg">
            <h2>{collectionName}</h2>
            <Grid container spacing={2}>
              {nftsByCollection[collectionName].map((nft) => (
                <Grid key={nft.contract + nft.template_mint} xs={4} md={3} item>
                  <NFTCard nft={nft} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Paper>
      ))}
    </Box>
  )
}

export default NFTGrid
