import React from 'react'

export const Mouseover = () => {
  return (
    <>
     <nav class="group" onmouseover="func1()">
       <ol>
          <li><a href="index.html">home</a></li>
          <li><a href="artists.html">artists</a></li>
          <li><a href="schedule.html">schedule</a></li>
          <li><a href="venuetravel.html">venue/travel</a></li>
          <li><a href="register.html">register</a></li>
       </ol>
    </nav>
    </>
  )
}
