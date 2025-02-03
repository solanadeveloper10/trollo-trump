import { useState } from 'react'

const Contract = () => {
  const [isCopied, setIsCopied] = useState(false);
  const textToCopy = "As8SD5gbFvFFPxd8qwxSQWWrnigBE7a3WDUP1SoMid6L";

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        // Optionally, reset the copied status after a short delay
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((error) => {
        console.error("Copy failed", error);
      });
  };

  return (
    <div className={'contract-wrapper'}>
      <p>
        As8SD5gbFvFFPxd8qwxSQWWrnigBE7a3WDUP1SoMid6L
      </p>
      <button onClick={handleCopy} className='copy-btn'>Copy</button>
      {isCopied ? <div className='copied-text'>Copied!</div> : null}
    </div>
  )
}

export default Contract
