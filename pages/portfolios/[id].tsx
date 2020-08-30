import React from 'react'

import { NextPage } from "next";





interface IProps {
    portfolio: {
        title: string,
        jobTitle: string,
        companyWebsite: string,
        location: string,
        startDate: string,
        endDate: string,
        description: string
    };
}

const getPortfolioById = (id: string | string[] | undefined) => {
    const query = `query Portfolio($id: ID){
      portfolio (id: $id) {
        _id,
        title,
        company,
        companyWebsite,
        location,
        jobTitle,
        description
        startDate
        endDate
      }
    }`
    const variables = { id }
    return fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, variables }),

    }).then(res => res.json())
}



const PortfolioDetail: NextPage<IProps> = ({ portfolio }) => {

    const { title, jobTitle, companyWebsite, location, startDate, endDate, description } = portfolio


    return (
        <div className="portfolio-detail">
            <div className="container">

                <div className="jumbotron">
                    <h1 className="display-3">{title}</h1>
                    <p className="lead">{jobTitle}</p>
                    <p>
                        <a className="btn btn-lg btn-success" href={companyWebsite} role="button">
                            See Company</a>
                    </p>
                </div>

                <div className="row marketing">
                    <div className="col-lg-6">
                        <h4 className="title">Location</h4>
                        <p className="text">{location}</p>

                        <h4 className="title">Start Date</h4>
                        <p className="text">{startDate}</p>
                    </div>

                    <div className="col-lg-6">
                        {/* TODO: days later... */}
                        <h4 className="title">Days</h4>
                        <p className="text">44</p>

                        <h4 className="title">End Date</h4>
                        <p className="text">{endDate}</p>
                    </div>
                    <div className="col-md-12">
                        <hr />
                        <h4 className="title">Description</h4>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

PortfolioDetail.getInitialProps = async ({ query }) => {
    const data = await getPortfolioById(query.id);
    return { ...data.data }
};


export default PortfolioDetail;
