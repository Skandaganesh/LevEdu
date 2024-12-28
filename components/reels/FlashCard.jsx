"use client"

import React from 'react'

const FlashCard = ({ description,rsrc_url }) => {
  return (
    <div className='bg-white rounded shadow min-h-20 min-w-full p-4'>
        <p className='font-semibold'>{description}</p>
        <a href={rsrc_url} target="_blank" rel="noopener noreferrer" className='underline text-blue-500'>Visit Link</a>
    </div>
  )
}

export default FlashCard