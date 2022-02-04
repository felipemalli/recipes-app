import React, { useState } from 'react';
import shareIcon from '../images/shareIcon.svg';

function ShareButton() {
  const [copyUrl, setCopyUrl] = useState(false);
  const TWO = 2000;
  setTimeout(() => setCopyUrl(false), TWO);

  return (
    <div>
      <button
        type="button"
        onClick={ () => navigator.clipboard.writeText(window.location.href)
          .then(() => setCopyUrl(true))
          .then(() => setTimeout(() => setCopyUrl(false), TWO)) }
        data-testid="share-btn"
      >
        <img
          src={ shareIcon }
          alt="ShareButton"
        />
      </button>
      {copyUrl && <span>Link copied!</span>}
    </div>
  );
}

export default ShareButton;
