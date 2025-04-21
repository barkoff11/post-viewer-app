import React, { JSX } from 'react'

export function lightMatches(text: string, query: string): (string | JSX.Element)[] {
  if (!query) return [text] // если пустая строка 
  
  const regex = new RegExp(`(${query})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={index} style={{ color: 'red' }}>{part}</span>
    ) : (
      part
    )
  )
}
