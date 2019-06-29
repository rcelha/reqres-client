import React from "react";
import UserList from "../components/UserList";
import { users } from "../services";
import { useEffect } from "react";
import { withQuery } from "reresource";

const UserListContainer = props => {
  const { resource, listResources, ...otherProps } = props;

  useEffect(() => {
    if (resource.initialized) return;
    listResources({ page: 0 });
  }, [listResources, resource]);

  const onLoadMoreClick = () => {
    listResources({ page: resource.meta.page + 1 });
  };

  if (resource.error) return <div>Error</div>;
  if (resource.loading) return <div>Loading</div>;
  return (
    <UserList
      {...otherProps}
      users={resource.data || []}
      onLoadMoreClick={onLoadMoreClick}
    />
  );
};

export default withQuery("users", users.list)(UserListContainer);
