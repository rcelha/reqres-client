import React from "react";
import UserList from "../components/UserList";
import { compose } from "redux";
import { users, colours } from "../services";
import { useEffect } from "react";
import { withQuery } from "reresource";

const UserListContainer = props => {
  const { users, loadUsers, notUsers, loadNotUsers, ...otherProps } = props;

  useEffect(() => {
    if (users.initialized) return;
    loadUsers({ page: 0 });
  }, [users, loadUsers]);

  useEffect(() => {
    if (notUsers.initialized) return;
    loadNotUsers({ page: 0 });
  }, [notUsers, loadNotUsers]);

  const onLoadMoreClick = () => {
    loadUsers({ page: users.meta.page + 1 });
  };

  if (users.error) return <div>Error</div>;
  if (users.loading) return <div>Loading</div>;

  console.log(users.data);
  console.log(notUsers.data);

  return (
    <UserList
      {...otherProps}
      users={users.data || []}
      onLoadMoreClick={onLoadMoreClick}
    />
  );
};

export default compose(
  withQuery({
    resourceType: "users",
    serviceFunction: users.list,
    name: "users"
  }),
  withQuery({
    resourceType: "colours",
    serviceFunction: colours.list,
    name: "notUsers"
  })
)(UserListContainer);
