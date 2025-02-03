import Contract from './Contract'
import AnimatedBackground from './AnimatedBackground'

import './App.css'

function App() {
  return <>
    <div className='color-bg' />
    <div className='wrapper'>
      <header className='header'>
        <a href="https://x.com/TrumpTrollFace" target='_blank' className='social-link'>
          X
        </a>
        <a href="https://t.me/TrumpTrollFace" target='_blank' className='social-link'>
          Telegram
        </a>
        <a href="https://www.dextools.io/app/en/solana/pair-explorer/A5WNKFFW7C92Bg23dfh1G9uXGLTyRM5jUQrw8W1JwVPg?t=1738583027759" target='_blank' className='social-link'>
          Dextools
        </a>
        <a href="https://dexscreener.com/solana/CLpbEby7tnyesGnLYFY1BoKuoQmNyfEEkwWhbBFtroL" target='_blank' className='social-link'>
          Dexscreener
        </a>
        <a href="https://raydium.io/swap/?inputMint=sol&outputMint=CLpbEby7tnyesGnLYFY1BoKuoQmNyfEEkwWhbBFtroL" target='_blank' className='social-link'>
          Raydium
        </a>
      </header>

      <AnimatedBackground />

      <Contract />
    </div>

  </>
}

export default App
