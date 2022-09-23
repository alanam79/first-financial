import React from 'react'
import "./Demo.css"

const Demo = () => {
  return (
    <div className='demo' id='demo'>
        <div className='container'>
            <div className='col-1'>
                <p>More Than 100 Financial Planners,</p>
                <p>One Philosophy</p>
                <p>Demo this site to see Alana's React App skills.</p>
                <button className='button'>Get your free financial analysis</button>
            </div>
            <div className='col-2'>
            <iframe width='570' height='320' src='https://www.youtube.com/embed/oeqP5JtihMA' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
        </div>
    </div>
  )
}

export default Demo