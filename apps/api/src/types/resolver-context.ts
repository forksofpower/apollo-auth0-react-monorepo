import { PubSub } from "graphql-subscriptions";
import { Account } from "../graphql/generated";

export type AuthenticatedContext = {
    account?: Account;
    createAccountRuleJWT?: string;
};

export type SubscriptionContext = {
    pubsub: PubSub;
}