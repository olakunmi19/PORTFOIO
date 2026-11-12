import React from "react";
import '@fortawesome/free-regular-svg-icons'
import Chip from '@mui/material/Chip';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Flutter",
    "Dart",
    "State Management",
    "Android",
    "iOS",
];

const labelsSecond = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "React",
];

const labelsThird = [
    "SQL",
    "Mysql",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <PhoneIphoneIcon sx={{ fontSize: 50 }} />
                    <h3>Mobile App Development</h3>
                    <p>I create modern mobile application interfaces with Flutter and Dart, focusing on responsive layouts, reusable components, navigation, and smooth user experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <CodeIcon sx={{ fontSize: 50 }} />
                    <h3>Web Development</h3>
                    <p>I build responsive web interfaces and develop my skills in frontend and backend technologies to create complete, functional web applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <StorageIcon sx={{ fontSize: 50 }} />
                    <h3>Backend & Database Development</h3>
                    <p>I am building my knowledge of databases, SQL, and backend services to connect applications to data, manage user information, and support real-world features.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;