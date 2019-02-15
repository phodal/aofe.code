const {ApolloServer, gql} = require('apollo-server');
const {RESTDataSource} = require('apollo-datasource-rest');

const typeDefs = gql`
  type Make {
    id: ID!
    category: String
    featured_image: String
  }

  type Query {
    make(id: ID!): Make
    makes(limit: Int): [Make]
  }
`;

const resolvers = {
  Query: {
    make: async (_source, { id }, { dataSources }) => {
      return dataSources.makeApi.getMake(id);
    },
    makes: async (_source, _args, { dataSources }) => {
      return dataSources.makeApi.getMakes(_args);
    }
  },
};

class MakeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.wandianshenme.com/api/';
  }

  async getMake(id) {
    return this.get(`make/${id}`);
  }

  async getMakes(args) {
    const data = await this.get('make', args);
    return data.results;
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    makeApi: new MakeAPI(),
  }),
});

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
