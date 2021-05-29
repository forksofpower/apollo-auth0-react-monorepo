import { getManager } from "typeorm"
import { Account } from "../account"

/**
 * Account repository helper
 */
const accountRepo = () => getManager().getRepository<Account>('Account');

const accountCreate = async (
    auth0UserId: string,
    email: string
): Promise<Account> => {
    try {
        const repo = accountRepo();

        const { identifiers: [pk] } = await repo.insert({
            email,
            auth0UserId
        })

        return await accountFindByPrimaryKey((pk as unknown) as number);
    } catch(error) {
        throw error;
    }
}

export const accountFindByPrimaryKey = async (pk: number): Promise<Account> => {
    const repo = accountRepo();

    return repo.findOne(pk);
}

export const accountFindByAuth0UserId = async (auth0UserId: string) => {
    const repo = accountRepo();

    try {
        return await repo.findOneOrFail({
            where: [{ auth0UserId: auth0UserId }]
        });
    } catch (error) {
        throw error;
    }

}

export const accountFindOrCreateByAuth0UserId = async (
    auth0UserId: string,
    email: string
): Promise<Account> => {
    const repo = accountRepo();

    try {
        return await accountFindByAuth0UserId(auth0UserId)
    } catch(error) {
        return await accountCreate(auth0UserId, email);
    }
}