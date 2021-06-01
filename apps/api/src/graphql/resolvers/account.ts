import { AuthenticationError } from "apollo-server-errors";
import jwt from "jsonwebtoken";
import { Accounts } from "../../core";
import { AuthenticatedContext } from "../../types/resolver-context";
import { Account as GraphAccount, AccountFindOrCreateResponse, MutationAccountFindOrCreateArgs } from "../generated";

export const create = async (
    _parent: unknown,
    { input: { auth0UserId, email} }: MutationAccountFindOrCreateArgs,
    context: AuthenticatedContext
  ): Promise<AccountFindOrCreateResponse> => {
    try {
      if (context.createAccountRuleJWT) {
        jwt.verify(context.createAccountRuleJWT, '_xGoOqy0PR4ZVIZk4s38uw_OcDWr2Lm3eFkZC8JQ7LovZb9e4zl6rIaZa1zkAf_n');
        const account = await Accounts.accountFindOrCreateByAuth0UserId(auth0UserId, email);
        return { account: (account as unknown) as GraphAccount }
      } else {
        throw new AuthenticationError('The request is not authenticated');
      }
    } catch(error) {
      console.error(error);
      return { account: undefined }
    }
  };