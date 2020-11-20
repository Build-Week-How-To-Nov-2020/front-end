import React from 'react'

export default function User({ details }) {
    if (!details){return <h3>Working of your request...</h3>}
    return (
        <div className='user container'>
        <h2>{details.username}</h2>
        
        </div>

    )}