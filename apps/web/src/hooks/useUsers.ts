import React from "react";
import {
  User,
  UserInput,
  useUserCreateMutation,
  useUserDestroyMutation,
  useUsersListAllQuery,
  useUserUpdateMutation,
} from "../graphql";

const useUsers = () => {
  const {
    data: userData,
    loading: usersLoading,
    error: usersError,
  } = useUsersListAllQuery();

  const [deletedUserIds, setDeletedUserIds] = React.useState<number[]>([]);
  const [userCreateMutation] = useUserCreateMutation();
  const [userUpdateMutation] = useUserUpdateMutation();
  const [userDestroyMutation] = useUserDestroyMutation();

  const createUser = async (
    { email, firstName, lastName }: UserInput,
    refetch = true
  ): Promise<void> => {
    if (refetch) {
      await userCreateMutation({
        refetchQueries: ["CardsListAll"],
        variables: {
          input: {
            user: { email, firstName, lastName },
          },
        },
      });
    } else {
      await userCreateMutation({
        variables: {
          input: {
            user: {
              email,
              firstName,
              lastName,
            },
          },
        },
      });
    }
  };

  const updateUser = async (
    id: number,
    { email, firstName, lastName }: UserInput
  ) => {
    await userUpdateMutation({
      refetchQueries: ["CardsListAll"],
      variables: {
        input: {
          user: {
            id,
            email,
            firstName,
            lastName,
          },
        },
      },
    });
  };

  const deleteUser = async (id: number) => {
    setDeletedUserIds([...deletedUserIds, id]);
    await userDestroyMutation({
      variables: { input: { userId: id } },
    });
  };

  let loadedUsers: User[] = [];

  if (userData) {
    loadedUsers = userData.usersListAll.users.filter(
      (user) => !deletedUserIds.includes(user.id)
    );
  }
  return {
    users: loadedUsers,
    usersLoading,
    usersError,
    createUser,
    updateUser,
    deleteUser,
  };
};

export default useUsers;
