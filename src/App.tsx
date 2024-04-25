import React, { useState } from 'react'

import { Container, CssBaseline } from '@mui/material'

import Header from './components/Header'
import SearchForm from './components/SearchForm'
import NFTGrid from './components/NFTGrid'

import { useNFTs } from './hooks/useNFTs'

const App: React.FC = () => {
  const [accountName, setAccountName] = useState('')
  const { data: nfts, isLoading, error } = useNFTs(accountName)

  // FUNCTION to handle `Search` event -> refetch
  const handleSearch = async (account: string) => {
    setAccountName(account)
  }

  return (
    <>
      <CssBaseline />

      <Header />

      <Container maxWidth="lg">
        <SearchForm loading={isLoading} onSearch={handleSearch} />

        {isLoading ? (
          <h1>Loading ....</h1>
        ) : error ? (
          <h1>Error fetching NFTs with `{accountName}`</h1>
        ) : (
          nfts && <NFTGrid nfts={nfts} />
        )}
      </Container>
    </>
  )
}

export default App
