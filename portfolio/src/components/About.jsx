import React from 'react'
import { animate, text, stagger } from 'animejs';

const { chars } = text.split('.fancy-text', {
  chars: { wrap: 'clip' },
});

animate(chars, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 750, ease: 'in(3)' }
  ],
  duration: 750,
  ease: 'out(3)',
  delay: stagger(50),
  loop: true,
});

export const About = () => {
  return (
    <div className='about-me-container'>
      <div className="large centered row">
        <p className="fancy-text">
          Split text by chars.
          文字ごとに分割します。
        </p>
      </div>

      <p className='about-me_h2'>about</p>
      <p className='about-me_text'>
        Where art meets technology
      </p>
    </div>
  )
}
