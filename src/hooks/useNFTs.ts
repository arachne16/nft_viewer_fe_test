import { useQuery } from 'react-query'

import { fetchNFTsForAccount } from '../api/atomicassets'

// useNfts Custom Hook -> { data, isLoading, error, refetch }
export function useNFTs(accountName: string) {
  return useQuery(
    ['nfts', accountName],
    () => fetchNFTsForAccount(accountName),
    {
      enabled: !!accountName, // The query will not execute until the accountName is truthy
    }
  )
}
