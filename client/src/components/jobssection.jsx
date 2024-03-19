// JobsSection.js

import React from "react";
import '../app.css'
const JobsSection = () => {
    return (
      <div className="jobs-section">
        <h1>Welcome XYZ</h1>
        <button>Create New Jobs</button>
        <p>Recently Added Jobs</p>
        <div className="recent-jobs">
          <div className="job-number">70</div>
          <p className="job-name">Software Engineer</p>
        </div>
        <div className="recent-jobs">
          <div className="job-number">40</div>
          <p className="job-name"> Jr Software Engineer</p>
        </div>
        <div className="recent-jobs">
          <div className="job-number">30</div>
          <p className="job-name">UI/UX Designer</p>
        </div>
        <div className="recent-jobs">
          <div className="job-number">10</div>
          <p className="job-name">S. Software Engineer</p>
        </div>
        <div className="recent-jobs">
          <div className="job-number">10</div>
          <p className="job-name">S. Software Engineer</p>
        </div>
        <div className="recent-jobs">
          <div className="job-number">10</div>
          <p className="job-name">S. Software Engineer</p>
        </div>
        <div className="recent-jobs">
          <div className="job-number">10</div>
          <p className="job-name">S. Software Engineer</p>
        </div>
        <div className="recent-jobs">
          <div className="job-number">10</div>
          <p className="job-name">S. Software Engineer</p>
        </div>
      </div>
    );
  };

export default JobsSection;
