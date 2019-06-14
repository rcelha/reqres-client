import React from "react";
import { connect } from "react-redux";
import { listResources, getFrom } from "reresource";
import { get } from "lodash";

import UserList from "../components/UserList";
import { users } from "../services";
import { useEffect } from "react";

const UserListContainer = props => {
  const { loadUsers } = props;
  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  if (props.usersRes.error) return <div>Error</div>;

  return <UserList {...props} />;
};

function mapStateToProps(state, props) {
  const usersRes = getFrom(state, "users");
  const users = usersRes.data || [];
  const page = get(usersRes.meta, "page", 0);
  const totalPages = get(usersRes.meta, "total_pages", 0);
  return {
    usersRes,
    users,
    page,
    totalPages
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    loadUsers: page =>
      dispatch(listResources("users", users.list, { page }, { append: true }))
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    loadMoreDisabled:
      stateProps.page === stateProps.totalPages || stateProps.usersRes.loading,
    onLoadMoreClick: () => {
      dispatchProps.loadUsers(stateProps.usersRes.meta.page + 1);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(UserListContainer);
