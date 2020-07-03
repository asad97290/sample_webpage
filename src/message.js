import React from 'react'

export let Message = (probs)=> {
    return(
    <h1>The room is {probs.light ? 'lit' : 'dark'}</h1>
    )
}
