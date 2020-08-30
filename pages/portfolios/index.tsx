import React, { useState } from "react";
import { NextPage } from "next";
import Link from 'next/link'

import PortfolioCard from '@/components/portfolio/PortfolioCard'


interface IProps {
  data: any;
}


const deletePortfolio = (id: string) => {
  const query = `mutation DeletePortfolio {
    deletePortfolio(id: "${id}")
  }`
  return fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
}

const updatePortfolio = (id: string) => {
  const query = `mutation UpdatePortfolio {
    updatePortfolio(id: "${id}", input: {
        title: "Job in update"
        company: "Netcentric"
        companyWebsite: "www.google.com"
        location: "Spain, Barcelona"
        jobTitle: "Engineer"
        description: "Doing something, programing...."
        startDate: "01/01/2014"
        endDate: "01/01/2016"
    }){
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
  return fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
}

const createPortoflio = () => {
  const query = `mutation CreatePortfolio {
   createPortfolio(input: {
        title: "Job in gggg"
        company: "Netcentric"
        companyWebsite: "www.google.com"
        location: "Spain, Barcelona"
        jobTitle: "Engineer"
        description: "Doing something, programing...."
        startDate: "01/01/2014"
        endDate: "01/01/2016"
    }){
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
  return fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
}


const getPortfolios = () => {
  const query = `query Portfolios{
    portfolios {
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
  return fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
}

const Portfolios: NextPage<IProps> = ({ data }) => {

  const [portfolios, setPortfolios] = useState(data)

  const createPortfolioHandler = async () => {
    const data = await createPortoflio()
    setPortfolios(prev => [...prev, { ...data.data.createPortfolio }])
  }

  const updatePortfolioHandler = async (id: string) => {
    const data = await updatePortfolio(id)
    const portfolioIndex = portfolios.findIndex(el => el._id === id)
    const updatedPortfolios = [...portfolios]
    updatedPortfolios[portfolioIndex] = data.data.updatePortfolio
    setPortfolios(updatedPortfolios)
  }

  const deleteHandler = async (id: string) => {
    await deletePortfolio(id)
    setPortfolios(prev => prev.filter(el => el._id !== id))
  }



  return (
    <>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Portfolios</h1>
          </div>
        </div>
        <button className="btn btn-primary" onClick={createPortfolioHandler}>Create</button>
      </section>
      <section className="pb-5">
        <div className="row">

          {portfolios.map(el =>
            <div className="col-md-4" key={el._id}>
              <Link href="/portfolios/[id]" as={`/portfolios/${el._id}`}>
                <a className='card-link'>
                  <PortfolioCard title={el.title} description={el.description} jobTitle={el.jobTitle} startDate={el.startDate} endDate={el.endDate} />
                </a>
              </Link>
              <button className="btn btn-primary" onClick={() => updatePortfolioHandler(el._id)}>Update</button>
              <button className="btn btn-warning" onClick={() => deleteHandler(el._id)}>Delete</button>
            </div>)}
        </div>
      </section>
    </>
  );
};

Portfolios.getInitialProps = async () => {
  const { data } = await getPortfolios();
  return { data: data.portfolios };
};

export default Portfolios;
