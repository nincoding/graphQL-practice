import { graphql } from "@octokit/graphql";

const mytoken = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

export async function repo() {
  const { repository, viewer } = await graphql(
    `
      {
        repository(owner: "codestates-seb", name: "agora-states-fe") {
          discussions(first: 10) {
            edges {
              node {
                id
                title
                createdAt
                url
                author {
                  login
                  avatarUrl
                }
              }
            }
          }
        }
        viewer {
          login
        }
      }
    `,
    {
      headers: {
        authorization: `token ${mytoken}`,
      },
    }
  );
  return { repository, viewer };
}