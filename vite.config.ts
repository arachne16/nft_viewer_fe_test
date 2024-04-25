import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    define: {
      'process.env.__APP_ATOMIC_ASSETS__': JSON.stringify(
        env.VITE_ATOMIC_ASSETS_API
      ),
      'process.env.__API_IMAGE__': JSON.stringify(env.VITE_IMAGE_API),
    },
    plugins: [react()],
  }
})

// export default defineConfig({
//   plugins: [react()],
// })
