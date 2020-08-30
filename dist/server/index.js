"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const graphql_1 = require("graphql");
const express_graphql_1 = require("express-graphql");
const next_1 = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next_1.default({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;
(async () => {
    const data = {
        portfolios: [
            {
                _id: "sad87da79",
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
    };
    try {
        await app.prepare();
        const server = express_1.default();
        //construct a schema using a graphql language
        const schema = graphql_1.buildSchema(`

    type Portfolio {
      _id: ID
      title: String
      content: String
      jobTitle: String
      daysOfExperience: Int
      isCurrentlyEmployed: Boolean
    }

      type Query {
        hello: String
        portfolio: Portfolio
        portfolios: [Portfolio]
      }
    `);
        //the root provides a resolver for each API endpoint
        const root = {
            hello: () => {
                return 'Hello world!';
            },
            portfolio: () => {
                return data.portfolios[0];
            },
            portfolios: () => {
                return data.portfolios;
            }
        };
        server.use('/graphql', express_graphql_1.graphqlHTTP({
            schema,
            rootValue: root,
            graphiql: true
        }));
        server.all("*", (req, res) => {
            return handle(req, res);
        });
        server.listen(port, (err) => {
            if (err)
                throw err;
            console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
        });
    }
    catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
