import React from "react";

type JobCardProps = {
  job: {
    title: string;
    company: string;
    description: string;
  };
};

const JobCard = ({ job }: JobCardProps) => {
  const { title, company, description } = job;

  return (
    <div className="card">
      <div className="card__header">
        <h2>{title}</h2>
        <h4>{company}</h4>
      </div>
      <div
        className="card__body"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

export default JobCard;
