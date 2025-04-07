import React, { useState } from 'react';
// import { FormControl, InputLabel, Select, MenuItem, OutlinedInput, Chip, Box } from '@mui/material';
import './Domain.css';

const skillsList = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js','Java','Python'];
function Domain(){
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
          setSelectedSkills((prev) => [...prev, value]);
        } else {
          setSelectedSkills((prev) => prev.filter((skill) => skill !== value));
        }
      };
return (
    <div className='Domain'>
        <nav className="navbar">
                <ul>
                    <li><a href="/Person">Personal</a></li>
                    <li><a href="/Education">Education</a></li>
                    <li><a href="/Domain">Domain</a></li>
                </ul>
            </nav>
        <div className='input-group'>
            <label htmlFor="Domain-name">Domain name</label>
            <input type="Domain-name" name="Domain-name" id="Domain-name" />
        </div>
        <div className='input-group'>
            <label htmlFor="Join-Date">Date of Joining</label>
            <input type="Join-Date" name="Join-Date" id="Join-Date" />
        </div>
        <div className='input-group'>
        <h3>Skills</h3>
      {skillsList.map((skill) => (
        <div key={skill}>
          <input
            type="checkbox"
            id={skill}
            value={skill}
            checked={selectedSkills.includes(skill)}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={skill}>{skill}</label>
            
        </div>
         ))}
         </div>
         <div className='input-group'>
            <label htmlFor="Others">Other skills</label>
            <input type="Others" name="Others" id="Others" />
        </div>
        <div className='input-group'>
            <label htmlFor="Profile">Profile URL(Github/LinkedIn)</label>
            <input type="Profile" name="Profile" id="Profile" />
        </div>
        {/* <p>Selected Skills: {skills.join(', ')}</p> */}
        <div>
      <label>Resume :</label>
      <input type="file" onChange={handleFileChange} />
      {file && (
        <div>
          <p><strong>Selected File:</strong> {file.name}</p>
        </div>
      )}
    </div>
    <div className='input-group'>
            <button className="submit-btn" type="submit">Submit</button>
        </div>
         
    </div>
)
};
export default Domain;

