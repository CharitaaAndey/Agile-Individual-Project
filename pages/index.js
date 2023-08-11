import React from 'react';

function HomePage() {
  return (
    <div>
      <h1>Hello Professor</h1>
      <p>This is the homepage of our web system project.</p>
    </div>
  );
}

export default HomePage;

import React from 'react';

const HomePage = () => {
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="portrait">
            <img src="images/resume.webp" alt="Portrait of Andey Sai Lakshmi Charitaa, Data Scientist" />
          </div>
          <h2>Andey Sai Lakshmi Charitaa</h2>
          <h3>Data Scientist</h3>
          <div className="links">
            <a href="https://linkedin.com/in/ca" aria-label="Andey Sai Lakshmi Charitaa's LinkedIn profile">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/CharitaaAndey" aria-label="Andey Sai Lakshmi Charitaa's Twitter profile">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://github.com/CharitaaAndey" aria-label="Andey Sai Lakshmi Charitaa's GitHub profile">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:samabeenlagging@gmail.com" aria-label="Email Andey Sai Lakshmi Charitaa">
              <i className="fab fas fa-envelope"></i>
            </a>
            <a href="tel:+9677895467" aria-label="Call Andey Sai Lakshmi Charitaa">
              <i className="fab fas fa-phone"></i>
            </a>
          </div>
          <section className="sidebar-bottom">
            <h4>Objective</h4>
            <p>Highly motivated data science graduate (still pursuing) with expertise in data analysis and business intelligence. Seeking a challenging role as a Data Scientist, Data Analyst, or Business Analyst. Committed to leveraging data-driven strategies for optimal decision-making and organizational performance.</p>
          </section>
        </div>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Inspiring Innovation, Crafting Possibilities</h1>
        </header>
        <section className="skills-section">
          <h2>Skills</h2>
          <ul className="skill-list">
            <li><i className="fab fa-python fa-skill-icon"></i> Python</li>
            <li><i className="fas fa-r-project fa-skill-icon"></i> R</li>
            <li><i className="fas fa-database fa-skill-icon"></i> SQL</li>
            <li><i className="fas fa-file-excel fa-skill-icon"></i> Excel</li>
            <li><i className="fas fa-chart-bar fa-skill-icon"></i> Tableau</li>
            <li><i className="fas fa-comments fa-skill-icon"></i> Communication Management</li>
            <li><i className="fas fa-lightbulb fa-skill-icon"></i> Problem-Solving</li>
            <li><i className="fas fa-chart-line fa-skill-icon"></i> Data Analysis & Visualization</li>
            <li><i className="fas fa-chart-pie fa-skill-icon"></i> Statistical Analysis</li>
          </ul>
        </section>
        <section className="experience-section">
          <h2>Experience</h2>
          <h3>Data Analyst Intern, Social Media Manager | SectorSeven E4E Technologies Pvt Ltd</h3>
          <h4>Jul '22 - Nov '22</h4>
          <ul>
            <li>Market Analysis & Strategic Planning</li>
            <li>Project & Content Management</li>
            <li>Data Analytics & Distribution Strategies</li>
          </ul>
        </section>
        <section className="education-section">
          <h2>Education</h2>
          <div>
            <h3>B.Tech in Computer Science | GITAM University</h3>
            <h4>Aug '17 - Jun '21</h4>
          </div>
          <div>
            <h3>M.S in Data Science | NJIT</h3>
            <h4>Jan '23 - Present</h4>
          </div>
        </section>
        <section className="project-section">
          <h2>Projects</h2>
          <ul>
            <li>Estimating Body Fat Index and Detecting Leukemia Using BFI</li>
            <li>Prediction of House Pricing</li>
          </ul>
        </section>
        <section className="certification-section">
          <h2>Certifications</h2>
          <p>Training in Python | R N Reddy Institute | June '21 - September '21</p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;

