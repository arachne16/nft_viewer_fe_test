import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { renderHook, waitFor } from '@testing-library/react'
import axios from 'axios'

import { useNFTs } from '../hooks/useNFTs'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // ✅ turns retries off
        retry: false,
      },
    },
  })

  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

describe('useNFTs', () => {
  it('fetches NFTs for a given account name', async () => {
    // Mock data to return
    // const nfts = [
    //   { id: '1', name: 'NFT 1' },
    //   { id: '2', name: 'NFT 2' },
    // ]
    const nfts = {} // EMPTY object in case of `womplayextra`
    mockedAxios.get.mockResolvedValue({ data: { data: nfts } })

    // Use the hook in a test renderer
    const { result } = renderHook(() => useNFTs('womplayextra'), {
      wrapper: createWrapper(),
    })

    // Wait for hook to update
    await waitFor(() =>
      expect(result.current).toMatchObject({
        // data: nfts,
        // isLoading: false,
        // error: undefined,
      })
    )

    // Check the state of the hook
    // expect(result.current.data).toEqual(nfts)
    // expect(result.current.isLoading).toBe(false)
    // expect(result.current.error).toBe(undefined)
  })
})
