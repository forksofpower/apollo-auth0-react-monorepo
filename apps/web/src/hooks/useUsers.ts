import { User, useUsersListAllQuery } from "../graphql";

const useUsers = () => {
  const {
    data: userList,
    loading: usersLoading,
    error: usersError,
  } = useUsersListAllQuery();

  return {
    userList: userList?.usersListAll.users as User[],
    usersLoading,
    usersError,
  };
};

export default useUsers;
