import React, { useState } from 'react';
import './PrescriptionPage.css';

const PrescriptionPage = () => {
    const handleSubmit = () => {
        // Perform any necessary form submission logic here
        alert('Prescription Submitted Successfully');
        window.location.href = '/';
      };


  const [rightEye, setRightEye] = useState({
    rx: '',
    sph: '',
    cyl: '',
    axis: '',
    prism: '',
    prismBase: '',
    add: ''
  });

  const [leftEye, setLeftEye] = useState({
    rx: '',
    sph: '',
    cyl: '',
    axis: '',
    prism: '',
    prismBase: '',
    add: ''
  });

  const handleInputChange = (eye, field, value) => {
    if (eye === 'right') {
      setRightEye(prevState => ({ ...prevState, [field]: value }));
    } else if (eye === 'left') {
      setLeftEye(prevState => ({ ...prevState, [field]: value }));
    }
  };

  const generateDropdownOptions = (start, end, increment) => {
    const options = [];
    for (let num = start; num <= end; num += increment) {
      options.push(
        <option key={num} value={num.toFixed(2)}>
          {num.toFixed(2)}
        </option>
      );
    }
    return options;
  };

  return (
    <div>
      <h1>Prescription Page</h1>
      <div className="table-responsive">
        <table className="prescription-table">
          <thead>
            <tr>
              <th>Rx</th>
              <th>SPH</th>
              <th>CYL</th>
              <th>AXIS</th>
              <th>Prism (H)</th>
              <th>Prism Base (H)</th>
              <th>ADD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Right (OD)</td>
              <td>
                <select
                  value={rightEye.sph}
                  onChange={e => handleInputChange('right', 'sph', e.target.value)}
                >
                  {generateDropdownOptions(-10.00, 8.00, 0.25)}
                </select>
              </td>
              <td>
                <select
                  value={rightEye.cyl}
                  onChange={e => handleInputChange('right', 'cyl', e.target.value)}
                >
                  {generateDropdownOptions(0.00, 6.00, +0.25)}
                </select>
              </td>
              <td>
                <select
                  value={rightEye.axis}
                  onChange={e => handleInputChange('right', 'axis', e.target.value)}
                >
                  {generateDropdownOptions(1, 180, 1)}
                </select>
              </td>
              <td>
                <select
                  value={rightEye.prism}
                  onChange={e => handleInputChange('right', 'prism', e.target.value)}
                >
                  {generateDropdownOptions(0.00, 6.00, 0.5)}
                </select>
              </td>
              <td>
                <select
                  value={rightEye.prismBase}
                  onChange={e => handleInputChange('right', 'prismBase', e.target.value)}
                >
                  <option value="In">In</option>
                  <option value="Out">Out</option>
                </select>
              </td>
              <td>
                <select
                  value={rightEye.add}
                  onChange={e => handleInputChange('right', 'add', e.target.value)}>
                    {generateDropdownOptions(1.00, 15.00, 1.0)}
                  </select>
              </td>
            </tr>
            <tr>
              <td>Left (OS)</td>
              <td>
                <select
                  value={leftEye.sph}
                  onChange={e => handleInputChange('left', 'sph', e.target.value)}
                >
                  {generateDropdownOptions(-10.00, 8.00, 0.25)}
                </select>
              </td>
              <td>
                <select
                  value={leftEye.cyl}
                  onChange={e => handleInputChange('left', 'cyl', e.target.value)}
                >
                  {generateDropdownOptions(0.00, +6.00, +0.25)}
                </select>
              </td>
              <td>
                <select
                  value={leftEye.axis}
                  onChange={e => handleInputChange('left', 'axis', e.target.value)}
                >
                  {generateDropdownOptions(1, 180, 1)}
                </select>
              </td>             
              <td>
                <select
                  value={leftEye.prism}
                  onChange={e => handleInputChange('left', 'prism', e.target.value)}
                >
                  {generateDropdownOptions(0.00, 6.00, 0.5)}
                </select>
              </td>
              <td>
                <select
                  value={leftEye.prismBase}
                  onChange={e => handleInputChange('left', 'prismBase', e.target.value)}
                >
                  <option value="In">In</option>
                  <option value="Out">Out</option>
                </select>
              </td>
              <td>
                <select
                  value={leftEye.add}
                  onChange={e => handleInputChange('left', 'add', e.target.value)}>
                    {generateDropdownOptions(1.00, 15.00, 1.0)}
                  </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br></br>
      <button onClick={handleSubmit}>Submit your prescription</button>
    </div>
  );
};

export default PrescriptionPage;
