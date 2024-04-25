import axios from 'axios'

import { INFTAsset, INFTAssetsResponse } from '../types/atomicassets'

const BASE_ASSETS_URL = process.env.__APP_ATOMIC_ASSETS__

// FUNCTION to fetch the data with `accountName`
export const fetchNFTsForAccount = async (
  accountName: string
): Promise<INFTAsset[]> => {
  const response = await axios.get<INFTAssetsResponse>(`${BASE_ASSETS_URL}`, {
    params: { owner: accountName },
  })
  return response.data.data
}
