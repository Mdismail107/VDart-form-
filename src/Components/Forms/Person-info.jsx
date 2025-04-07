import './Person-info.css';
import React, { useState } from 'react';


function Personinfo(){
    const [selectedOption, setSelectedOption] = useState('');
    const [gender, setGender] = useState('');
return (
    <div className='person-info'>
        <nav className="navbar">
                <ul>
                    <li><a href="/Person">Personal</a></li>
                    <li><a href="/Education">Education</a></li>
                    <li><a href="/Domain">Domain</a></li>
                </ul>
            </nav>
        <div className='input-group'>
            <label htmlFor="first-name">First Name</label>
            <input type="first-name" name="first-name" id="first-name" />
        </div>
        <div className='input-group'>
            <label htmlFor="last-name">last Name</label>
            <input type="last-name" name="Last-name" id="Last-name" />
        </div>
        <div className='input-group'>
            <label htmlFor="name-as-aadhar">Name as per Aadhar</label>
            <input type="name-as-aadhar" name="name-as-aadhar" id="name-as-aadhar" />
        </div>
        <div className='input-group'>
            <label htmlFor="father-name">father-name</label>
            <input type="father-name" name="father-name" id="father-name" />
        </div>
        <div className='input-group'>
            <label htmlFor="Gender">Gender</label>
            {/* <input type="Gender" name="Gender" id="Gender" /> */}
            <label>
      <input
        type="radio"
        value="male"
        checked={gender === 'male'}
        onChange={(e) => setGender(e.target.value)}
      />
      Male
    </label>
    <label>
      <input
        type="radio"
        value="female"
        checked={gender === 'female'}
        onChange={(e) => setGender(e.target.value)}
      />
      Female
    </label>
    <label>
      <input
        type="radio"
        value="Prefer not to say"
        checked={gender === 'Prefer not to say'}
        onChange={(e) => setGender(e.target.value)}
      />
      Prefer not to say
    </label>

            {/* <p>You selected: {gender}</p> */}
        </div>
        <div className='input-group'>
            <label htmlFor="Age">Age</label>
            <input type="Age" name="Age" id="Age" />
        </div>
        <div className='input-group'>
            <label htmlFor="Date-of-Birth">Date of Birth</label>
            <input type="Date-of-Birth" name="Date of Birth" id="Date of Birth" />
        </div>
        <div className='input-group'>
            <label htmlFor="Location">Location</label>
            <input type="Location" name="Location" id="Location" />
        </div>
        <div className='input-group'>
            <label htmlFor="Contact-Number">Contact number</label>
            <input type="Contact-Number" name="Contact-Number" id="Contact-Number" />
        </div>
        <div className='input-group'>
            <label htmlFor="alt-Contact-Number">Alternative Contact-Number</label>
            <input type="alt-Contact-Number" name="alt-Contact-Number" id="alt-Contact-Number" />
        </div>
        <div className='input-group'>
            <label htmlFor="Email-id">Email ID</label>
            <input type="Email-id" name="Email-id" id="Email-id" />
        </div>
        <div className='input-group'>
            <label htmlFor="Question">how did you come know about vdart?</label>
            {/* <input type="Question" name="Question" id="Question" /> */}
            <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="">--Choose--</option>
                <option value="Employee Referal">Employee Referal</option>
                <option value="Job portal">Job Portal</option>
                <option value="Social Media">Social Media</option>
                <option value="VDart Website">VDart Website</option>
                <option value="Direct">Direct</option>
            </select>
            {/* <p>You selected: {selectedOption}</p> */}
    
        </div>
        <div className='input-group'>
            <button className="submit-btn" type="submit"><a href="/Education">Submit</a></button>
        </div>
    </div>
    
)
};
export default Personinfo;
