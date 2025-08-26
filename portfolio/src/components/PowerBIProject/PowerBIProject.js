import React from 'react';

import './PowerBIProject.css';
import projectScreenshot1 from './img/dashboard-screenshot.png';
import projectScreenshot2 from './img/dashboard-screenshot1.png';
import projectScreenshot3 from './img/dashboard-screenshot2.png';
import projectScreenshot4 from './img/dashboard-screenshot3.png';
import projectScreenshot5 from './img/dashboard-screenshot4.png';
import projectScreenshot6 from './img/dashboard-screenshot5.png';
import projectScreenshot7 from './img/dashboard-screenshot6.png';
import projectScreenshot8 from './img/dashboard-screenshot7.png';
import projectScreenshot9 from './img/dashboard-screenshot8.png';
import projectScreenshot10 from './img/dashboard-screenshot9.png';
import projectScreenshot11 from './img/dashboard-screenshot10.png';



export default function PowerBIProject() {
  return (
    <>
      <div className='project__container'>
        <h2>Power BI Dashboard</h2>

        <div className='project__item'>
          <h3>Test Scores Data Analytics</h3>
          <img src={projectScreenshot1} alt=" "/>
          <p className='project__item__p-text'>
            This Power BI dashboard uses randomized FAKE data of 
            student's test scores across US states in Reading and Math.
          </p>
        </div>

        <div className='project__item'>
          <h3>Average Test Scores By Grade</h3>
          <img src={projectScreenshot3} alt=" "/>
          <p className='project__item__p-text'>
            If we hover over a bar in the chart, we can view the average
          Reading score based on grade.
          </p>
        </div>

        <div className='project__item'>
          <h3>Filter by County/Counties</h3>
          <img src={projectScreenshot4} alt=" "/>
          <p className='project__item__p-text'>
            We can use the search tool at the top right of the dashboard
            to refine the dashboard info even more, and only see the scores
            for one or multiple select counties.
          </p>
        </div>

        <div className='project__item'>
          <h3>Filtered Data</h3>
          <img src={projectScreenshot5} alt=" "/>
          <p className='project__item__p-text'>
            In this image, we've selected Oakwood County, and are viewing average Reading scores
            for grades 9 through 12 in this county. 
          </p>
        </div>

        <div className='project__item'>
          <h3>AI Q&A</h3>
          <img src={projectScreenshot6} alt=" "/>
          <p className='project__item__p-text'>
            Here is a Q&A panel where the user can type in frequently asked questions
            and receive visuals of the requested information. In this image, we've asked
            to see the reading score average by state on a map.
          </p>
        </div>

        <div className='project__item'>
          <h3>Data Visuals from Q&A</h3>
          <img src={projectScreenshot7} alt=" "/>
          <p className='project__item__p-text'>
            Now, the dashboard has created a map with the information requested in the 
            previous image. 
          </p>
        </div>

        <div className='project__item'>
          <h3>Getting More Info from Visuals</h3>
          <img src={projectScreenshot8} alt=" "/>
          <p className='project__item__p-text'>
            Hovering over a bar in the chart will provide us with more information.
          </p>
        </div>

        <div className='project__item'>
          <h3>Functional Button Logo</h3>
          <img src={projectScreenshot11} alt=" "/>
          <p className='project__item__p-text'>
            Last but not least, the logo in the top left corner of the dashboard 
            is a functional button that will redirect to the Pragmatic Academy website,
            where you can find loads of educational content and courses on Power BI and data analytics. 
            (Not sponsored--I'm just a big fan of learning.)
          </p>
        </div>
      </div>

    </>
  )
}
