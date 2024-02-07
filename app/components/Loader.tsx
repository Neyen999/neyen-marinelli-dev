import React from 'react';
import '../styles/components/Loader.css'

export const Loader = () => {
  return (
    <div className="lds-ring">
      <div></div><div></div><div></div><div></div>
    </div>
  )
}
