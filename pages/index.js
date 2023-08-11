import React from 'react';

function HomePage() {
  return (
    <div>
      <h1>Hello Professor</h1>
      <p>This is the homepage of our web system project.</p>
    </div>
  );
}

import React from 'react';

const HomePage = () => {
  return (
    <div className="container">
      <aside className="sidebar">
        {/* ... Sidebar content ... */}
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Inspiring Innovation, Crafting Possibilities</h1>
        </header>
        <section className="skills-section">
          <h2>Skills</h2>
          <ul className="skill-list">
            {/* ... Skill list items ... */}
          </ul>
        </section>
        <section className="experience-section">
          <h2>Experience</h2>
          <h3>Data Analyst Intern, Social Media Manager | SectorSeven E4E Technologies Pvt Ltd</h3>
          <h4>Jul '22 - Nov '22</h4>
          <ul>
            {/* ... Experience details ... */}
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
        <section className="certification-section">
          <h2>Certifications</h2>
          <p>Training in Python | R N Reddy Institute | June '21 - September '21</p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
