import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

async function init() {
    const app = express();
    const PORT = Number(process.env.PORT) || 8000;
    
    app.use(express.json())

    // creating graphql server
    const gqlServer = new ApolloServer({
        typeDefs: `
            type Query {
                hello: String
                say(name: String): String
            }
        `,
        resolvers: {
            Query: {
                hello: ()=> `Heyy there, I'm a GraphQL server 😊`,
                say: (_, {name}: {name: String}) => `Hey ${name}, How are you`
            }
        }
    })
    
    // Start gql server
    await gqlServer.start()
    
    app.get("/", (req, res) => {
      res.json({ message: "Server is running 🚀" });
    });

    app.use('/graphql', expressMiddleware(gqlServer))


    app.listen(PORT, () => console.log(`Served started at PORT: ${PORT} 🎉`));
}

init()