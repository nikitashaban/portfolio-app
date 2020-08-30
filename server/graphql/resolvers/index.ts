import crypto from "crypto";

const data = {
  portfolios: [
    {
      _id: "sad87da11",
      title: 'Job in Netcentric',
      company: 'Netcentric',
      companyWebsite: 'www.google.com',
      location: 'Spain, Barcelona',
      jobTitle: 'Engineer',
      description: 'Doing something, programing....',
      startDate: '01/01/2014',
      endDate: '01/01/2016'
    },
    {
      _id: "da789ad1",
      title: 'Job in Siemens',
      company: 'Siemens',
      companyWebsite: 'www.google.com',
      location: 'Slovakia, Kosice',
      jobTitle: 'Software Engineer',
      description: 'Responsoble for parsing framework for JSON medical data.',
      startDate: '01/01/2011',
      endDate: '01/01/2013'
    },
    {
      _id: "sadcxv9",
      title: 'Work in USA',
      company: 'WhoKnows',
      companyWebsite: 'www.google.com',
      location: 'USA, Montana',
      jobTitle: 'Housekeeping',
      description: 'So much responsibility....Overloaaaaaad',
      startDate: '01/01/2010',
      endDate: '01/01/2011'
    }
  ]
}

export const portfolioQueries = {
  hello: () => {
    return 'Hello world!'
  },
  portfolio: (_: any, { id }: { id: string }) => {
    const portfolio = data.portfolios.find(p => p._id === id)
    return portfolio
  },
  portfolios: () => {
    return data.portfolios
  },
}

export const portfolioMutations = {
  createPortfolio: (_: any, { input }: any) => {
    const _id = crypto.randomBytes(10).toString('hex')
    const newPortfolio = { ...input, _id }
    data.portfolios.push(newPortfolio)
    return newPortfolio
  },
  updatePortfolio: (_: any, { id, input }: { id: any, input: any }) => {
    const index = data.portfolios.findIndex(el => el._id === id)
    const oldPortfolio = data.portfolios[index]
    const newPortfolio = { ...oldPortfolio, ...input }
    data.portfolios[index] = newPortfolio
    return newPortfolio
  },
  deletePortfolio: (_: any, { id }: { id: string }) => {
    const index = data.portfolios.findIndex(el => el._id === id)
    data.portfolios.splice(index, 1)
    return id
  }
}