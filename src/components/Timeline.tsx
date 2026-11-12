import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career & Project History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2026 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Mobile & Full-Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Independent Projects</h4>
            <p>
              Engineering cross-platform mobile applications with Flutter and Dart, building state management systems, custom navigation, and reactive UI charts. Customizing responsive React.js web interfaces and developer tools.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2026 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Backend & Database Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Data Architecture</h4>
            <p>
              Designed and optimized relational data schemas using SQL and MySQL Workbench. Integrated cloud backends and REST APIs to handle data synchronization, authentication, and secure application state.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Digital Media & Content Producer</h3>
            <h4 className="vertical-timeline-element-subtitle">YouTube & Creative Production</h4>
            <p>
              Authored narrative scripts, directed visual composition, and managed technical content workflows for digital media channels, optimizing viewer engagement and visual storytelling.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;