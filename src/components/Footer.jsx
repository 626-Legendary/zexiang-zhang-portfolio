import React from 'react'

import { styles } from "../styles";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex items-center justify-center p-12">
      <div>© Copyright {year}, Zexiang Zhang. All rights reserved.</div>
    </div>
    
  )
}

export default Footer