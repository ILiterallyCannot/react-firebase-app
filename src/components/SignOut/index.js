import React from 'react';
 
import { withFirebase } from '../Firebase';
 
const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut} className="signOutBtn">
    Sign Out
  </button>
);
 
export default withFirebase(SignOutButton);