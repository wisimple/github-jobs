import React, { useEffect, useState } from "react";
import { isIntersectionTypeNode } from "typescript";
import JobCard from "./components/JobCard";
import GithubJobServie from "./Services/GithubJobService";

function App() {
  const [jobs, setjobs] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const data = await GithubJobServie.index();
      setjobs(data);
      setloading(false);
    };

    init();
  }, []);

  return (
    <div className="main-container">
      <header className="header">
        <div className="logo-box">
          <svg className="logo-icon">
            <use xlinkHref="/img/symbol-defs.svg#icon-github"></use>
          </svg>
        </div>
        <form action="#" className="search-form">
          <input
            type="text"
            name="search"
            className="search-input"
            placeholder="Search for jobs"
          />
          <input
            type="text"
            name="location"
            className="search-input"
            placeholder="Location"
          />
          <label htmlFor="full-time">Full-time</label>
          <input
            type="checkbox"
            name="full-time"
            id="full-time"
            className="search-input--checkbox"
          />
        </form>
      </header>
      <main className="content">
        {loading ? (
          <h1>Loding...</h1>
        ) : (
          jobs.map((job, i) => <JobCard key={i} job={job} />)
        )}
      </main>
    </div>
  );
}

export default App;
