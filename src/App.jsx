import Contract from './Contract'
import AnimatedBackground from './AnimatedBackground'

import './App.css'

function App() {
  return <>
    <div className='color-bg' />
    <div className='wrapper'>
      <header className='header'>
        <a href="https://x.com/TrumpTaxTroll" target='_blank' className='social-link'>
          X
        </a>
        <a href="https://t.me/TrumpTaxTroll" target='_blank' className='social-link'>
          Telegram
        </a>
        <a href="https://www.dextools.io/app/en/solana/pair-explorer/7iEGRnxBkxkVAjiQXa5nWBN3Tr4zrTxT8JNYrBd2mKjW?t=1738586391141" target='_blank' className='social-link'>
          Dextools
        </a>
        <a href="https://dexscreener.com/solana/As8SD5gbFvFFPxd8qwxSQWWrnigBE7a3WDUP1SoMid6L" target='_blank' className='social-link'>
          Dexscreener
        </a>
        <a href="https://raydium.io/swap/?inputMint=sol&outputMint=As8SD5gbFvFFPxd8qwxSQWWrnigBE7a3WDUP1SoMid6L" target='_blank' className='social-link'>
          Raydium
        </a>
      </header>

      <AnimatedBackground />

      <Contract />
    </div>

  </>
}

export default App
