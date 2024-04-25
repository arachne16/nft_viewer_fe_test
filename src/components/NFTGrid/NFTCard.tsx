import React from 'react'

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import { INFTAsset } from '../../types/atomicassets'

const BASE_IMG_URL = process.env.__API_IMAGE__

interface NFTCardProps {
  nft: INFTAsset
}

export const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  const image = `${BASE_IMG_URL}/${nft.data.img}` // IPFS image URL

  return (
    <Card sx={{ m: 2, minHeight: 360 }}>
      <CardMedia component="img" image={image} alt={nft.data.name} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nft.data.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Mint Number: #{nft.template_mint}
        </Typography>
      </CardContent>
    </Card>
  )
}
