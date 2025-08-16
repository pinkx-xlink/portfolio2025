import React from 'react'

const TextBlock = () => {
  setTimeout(() => {
    let animate = document.querySelectorAll('.entrance-animation');
    
    animate.forEach(item => item.classList.add('active'));
    }
    ,1000);

  return (
    <>
        <p class="entrance-animation">
        Hello
        </p>
        <p class = "entrance-animation">
        Here we are
        </p>
    </>
  )
}

export default TextBlock