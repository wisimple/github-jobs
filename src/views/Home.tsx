import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import Loader from "../components/Loader";
import GithubJobServie from "../Services/GithubJobService";

function Home() {
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
    <React.Fragment>
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
            <Loader />
          ) : (
            jobs.map((job, i) => <JobCard key={i} job={job} />)
          )}
        </main>
      </div>
    </React.Fragment>
  );
}

export default Home;
