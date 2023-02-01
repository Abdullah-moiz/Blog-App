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



// get recent post


export const getRecentPost = async () => {
  const query = gql`
  query getPostDetails() {
    posts(
      orderBy: createdAt_ASC
      last: 3
    ) {
      title,
      featuredImage {
        url
      },
      createdAt,
      slug

    }
  }
  `

  const data = await request(graphqlAPI , query);
  return data.posts;
}


// get similar post

export const getSimilarPost = async () => {
  const query = gql`
  query getPostDetails($slug: String!, $categories: [String!]) {
    posts(
      where: {slug_not: $slug , AND: {categories_some : {slug_in: $categories}}}
      last: 3
    ){
      title,
      featuredImage {url},
      createdAt,
      slug
    }
  }
  `
  const data = await request(graphqlAPI , query);
  return data.posts;

}



// get categories 

export const getCategories = async () => {
  const query = gql`
  query MyQuery {
    cateogries {
      slug
      name
    }
  }
  `
  const data = await request(graphqlAPI , query);
  return data.cateogries;
}