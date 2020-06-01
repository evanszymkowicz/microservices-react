import {useMutation} from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";

import {clearSession} from "#root/store/ducks/session";

const mutation = gql`
  mutation($sessionId: ID!) {
    deleteUserSession(sessionId: $sessionId)
  }
`;

const Email = styled.div`
  color: ${props => props.theme.nero};
  font-size: 1rem;
  margin-top: 0.25rem;
`;

const LogoutLink = styled.a.attrs({ href: "#" })`
  color: blue;
  display: block;
  margin-top: 0.25rem;
`;

const Wrapper = styled.div`
  color: ${props => props.theme.mortar};
  font-size: 0.9rem;
`;

// Important not to forget front end validation for logout
// prevents creating a default (evt.preventDefault)
// Clear session removes need for async

const Account = () => {
  const [deleteUserSession] = useMutation(mutation);
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);
  // no need for async
  return (
    <Wrapper>
      Logged in as
      <Email>{session.user.email}</Email>
      <LogoutLink
        onClick={evt => {
          evt.preventDefault();
          dispatch(clearSession());
          deleteUserSession({ variables: { sessionId: session.id } });
        }}
      >
        (Logout)
      </LogoutLink>
    </Wrapper>
  );
};

export default Account;
