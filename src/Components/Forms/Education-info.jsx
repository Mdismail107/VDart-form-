// Branch
// department
// year
// college
// loaction
// cgpa/percentage
// passout
import './Education-info.css';

function Educationinfo(){
return (
    <div className='Education-info'>
        <nav className="navbar">
                <ul>
                    <li><a href="/Person">Personal</a></li>
                    <li><a href="/Education">Education</a></li>
                    <li><a href="/Domain">Domain</a></li>
                </ul>
            </nav>
        <div className='input-group'>
            <label htmlFor="Branch-name">Branch</label>
            <input type="Branch-name" name="Branch-name" id="Branch-name" />
        </div>
        <div className='input-group'>
            <label htmlFor="Department">Department</label>
            <input type="Department" name="Department" id="Department" />
        </div>
        <div className='input-group'>
            <label htmlFor="Year">Year</label>
            <input type="Year" name="Year" id="Year" />
        </div>
        <div className='input-group'>
            <label htmlFor="College">College</label>
            <input type="College" name="College" id="College" />
        </div>
        <div className='input-group'>
            <label htmlFor="Location">Location</label>
            <input type="Location" name="Location" id="Location" />
        </div>
        <div className='input-group'>
            <label htmlFor="CGPA">CGPA</label>
            <input type="CGPA" name="CGPA" id="CGPA" />
        </div>
        <div className='input-group'>
            <label htmlFor="Passedout">Passedout</label>
            <input type="Passedout" name="Passedout" id="Passedout" />
        </div>
        <div className='input-group'>
            <button className="submit-btn" type="submit"><a href="/Domain">Submit</a></button>
        </div>
    </div>

    
)
};
export default Educationinfo;