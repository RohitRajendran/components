/**
 * The following script runs a query against the Github API to see if
 * an open pull request from the 'develop' branch is open against 'master'.
 * If it is then it exits successfully, and allows the yarn script to
 * continue on to running the visual tests. If there is not the process
 * exits with status 1 preventing CircleCI from continuing the job.
 */

const fetch = require('isomorphic-fetch');

return (
  fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
      repository(owner:"UnitedIncome", name:"components") {
        pullRequests(last:20, states:OPEN, baseRefName:master, headRefName:develop) {
          edges {
            node {
              title
              url
              labels(first:5) {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }`,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.data.repository.pullRequests.edges.length > 0) {
        return;
      } else {
        return process.exit(1);
      }
    })
    // As a failsafe all API related errors should exit the script.
    .catch(() => process.exit(1))
);
