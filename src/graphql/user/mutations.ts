// by createUser() we are returning an ID for the user
export const mutations = `#graphql
    createUser(firstName: String!, lastName: String, email: String!, password: String!): String
`