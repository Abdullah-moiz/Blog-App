import {request , gql} from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_API_URL

export const getPost = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                id
                name
                profileImage {
                  url
                }
              }
              createdAt
              excerpt
              featuredImage {
                url
              }
              title
              slug
              cateogries {
                name
                slug
              }
            }
          }
        }
      }
    `
    
    const data = await request(graphqlAPI , query)
    return data.postsConnection.edges;
}