import React from 'react'


interface IProps {
  title: string
  jobTitle: string
  description: string
  startDate: string
  endDate: string
}

const PortFolioCard: React.FC<IProps> = ({ title, jobTitle, description, startDate, endDate }) => {
  return (

    <div className="card subtle-shadow no-border">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{jobTitle}</h6>
        <p className="card-text fs-2">{description}</p>
      </div>
      <div className="card-footer no-border">
        <small className="text-muted">{startDate} - {endDate}</small>
      </div>
    </div>

  )
}

export default PortFolioCard;
