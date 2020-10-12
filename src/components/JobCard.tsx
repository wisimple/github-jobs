import React from "react";
import { Link } from "react-router-dom";

type JobCardProps = {
  job: {
    id: string;
    title: string;
    company: string;
    company_logo: string;
    company_url: string;
    description: string;
    location: string;
    type: string;
    how_to_apply: string;
  };
};

const JobCard = ({ job }: JobCardProps) => {
  const {
    id,
    title,
    company,
    company_logo,
    company_url,
    location,
    type,
    how_to_apply,
  } = job;

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__header__text">
          <h3>{title}</h3>
          <h5>
            <a href={company_url} target="_blank" rel="noopener noreferrer">
              {company}
            </a>
          </h5>
        </div>
        <div className="card__header__image">
          <a href={company_url} target="_blank" rel="noopener noreferrer">
            <img src={company_logo} alt={company} className="company-logo" />
          </a>
        </div>
      </div>
      <div className="card__body">
        <div className="flex--justify-sb mb-1">
          <span>Location: {location}</span>
          <span>Type: {type}</span>
        </div>
        <div>
          <h4>How to apply</h4>
          <div dangerouslySetInnerHTML={{ __html: how_to_apply }}></div>
        </div>
      </div>
      <div className="card__footer">
        <Link to={`/jobs/${id}`} className="button">
          Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
