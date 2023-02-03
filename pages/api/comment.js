// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


// create first api

import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_API_URL;



export default async function comment(req, res) {

    const data = JSON.parse(req.body);
    const { name, email, comment, slug } = data

    const [slugx] = slug;

    const graphQLClient = new GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
    })

    const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
  `;

    try {
        const result = await graphQLClient.request(query, {
            name, email, comment, slug : slugx
        })

        return res.status(200).send(result);
    } catch (error) {
        console.log(error.message)
    }


}

