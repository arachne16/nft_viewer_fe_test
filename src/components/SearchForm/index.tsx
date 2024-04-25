import React, { useState } from 'react'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

interface NftFormProps {
  loading: boolean
  onSearch: (account: string) => void
}

const SearchForm: React.FC<NftFormProps> = ({ loading, onSearch }) => {
  const [account, setAccount] = useState('')

  // FUNCTION to handle `Search` event
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    onSearch(account)
  }

  // FUNCTION to handle `Enter` key down
  const handleKeyDown = (ev: React.KeyboardEvent<HTMLDivElement>) => {
    if (ev.key === 'Enter') {
      onSearch(account)
    }
  }

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 2 } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        size="small"
        color="info"
        label="EOS Account Name"
        variant="standard"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />

      <Button
        disabled={loading}
        variant="contained"
        color="info"
        size="large"
        type="submit"
      >
        Search
      </Button>
    </Box>
  )
}

export default SearchForm
