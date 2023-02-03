import { request, gql } from 'graphql-request'

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

  const data = await request(graphqlAPI, query)
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

  const data = await request(graphqlAPI, query);
  return data.posts;
}


// get similar post

export const getSimilarPost = async (cateogries , slug) => {
  const query = gql`
  query getPostDetails($slug: String!, $cateogries: [String!]) {
    posts(
      where: {slug_not: $slug , AND: {cateogries_some : {slug_in: $cateogries}}}
      last: 3
    ){
      title,
      featuredImage {url},
      createdAt,
      slug
    }
  }
  `
  const data = await request(graphqlAPI, query , { cateogries, slug: String(slug)});
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
  const data = await request(graphqlAPI, query);
  return data.cateogries;
}


// get Post details
export const getPostDetails = async (slug) => {
  const query = gql`
  query getPostDetails($slug: String!) {
    posts(where: {slug: $slug}) {
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
            content {
              raw
            }
        }
      }
  `

  const data = await request(graphqlAPI, query , {slug})
  return data.posts;
}


export const submitComment = async (obj) => {
 const result = await fetch('/api/comment' , {
    method: 'POST',
    body : JSON.stringify(obj),
 }) 
 return result.json();
}