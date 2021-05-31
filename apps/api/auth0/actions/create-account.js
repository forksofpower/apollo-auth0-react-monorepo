/**
 * Handler that will be called during the execution of a PostUserRegistration flow.
 *
 * @param {Event} event - Details about the context and user that has registered.
 */
 exports.onExecutePostUserRegistration = async (event) => {

    // Check Auth0 extensions here: https://auth0-extensions.github.io/canirequire
    const { GraphQLClient } = require('graphql-request@1.8.2'); // for specific version of request
    const jwt = require('jsonwebtoken@8.5.1');
  
    const {user, connection, secrets} = event;
    const token = jwt.sign({}, secrets.JWT_SECRET, { expiresIn: 10 });
    // shipnow-dev auth0 tenant
  
    const endpoint = 'http://forksofpower.ngrok.io/graphql';
  
    // shipnow auth0 tenant
    // const endpoint = 'https://shipnow-api-production.herokuapp.com';
  
    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        "auth0-rules-authorization": token,
      },
    });
  
    const query = `
      mutation ($input: AccountFindOrCreateInput!) {
        accountFindOrCreate(input: $input) {
          account {
            email
          }
        }
      }
    `;
  
    const variables = {
      input: {
        email: user.email,
        auth0UserId: user.user_id
      }
    };
  
    try {
      const data = await graphQLClient.request(query, variables);
      console.log(data);
    } catch(error) {
      console.log(error)
    }
  };
  