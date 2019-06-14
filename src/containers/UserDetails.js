import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchResource, getFrom } from "reresource";

import UserDetails from "../components/UserDetails";
import { users } from "../services";

const UserDetailsContainer = ({ loadUser, id, user }) => {
  useEffect(() => {
    loadUser(id);
  }, [id, loadUser]);

  if (user.error) return <div>Error</div>;

  return <UserDetails {...user.data} loading={user.loading} />;
};

function mapStateToProps(state, props) {
  const id = props.match.params.id;
  const user = getFrom(state, "users", id);
  return {
    id,
    user
  };
}

function mapDispatchToProps(dispatch, props) {
  return { loadUser: id => dispatch(fetchResource("users", users.get, id)) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailsContainer);
