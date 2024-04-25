export interface INFTAsset {
  contract: string
  collection: { name: string }
  data: {
    name: string
    img: string
  }
  template_mint: string
}

export interface INFTAssetsResponse {
  success: boolean
  data: INFTAsset[]
}
