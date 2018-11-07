const {ApolloServer, gql} = require('apollo-server');
const {RESTDataSource} = require('apollo-datasource-rest');

const makes = [
  {
    "id": 1,
    "category": 1,
    "featured_image": "uploads/make/.thumbnails/amazon-echo.jpg/amazon-echo-600x360.jpg"
  },
  {
    "id": 2,
    "category": 2,
    "featured_image": "uploads/make/.thumbnails/connected-smart-cities.jpg/connected-smart-cities-600x360.jpg"
  }];

const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Make {
    id: ID!
    category: String
    featured_image: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    make(id: ID!): Make
    makes(limit: Int): [Make]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve makes from the "makes" array above.
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

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    makeApi: new MakeAPI(),
  }),
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
