import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { editUsers } from "../../../utils/getApi";

/**
 * User component to display user's page
 * @name User
 * @returns {JSX}
 */



const User = () => {
  const [editName, setEditName] = useState(false);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  //On récupére dans le store: getUser.user.body
  const selectAllData = (state)=> state.getUser.user
  const selectUser = (state) => state.getUser.user.body;
  const user = useSelector(selectUser);
  const allData = useSelector(selectAllData);
  const dispatch = useDispatch();

  
  console.log("Test all Data : ",allData);
  console.log("User : ",user);

  if (user === undefined) {
    return <Navigate to="/" />;
  }
  const firstName = user.firstName;
  const lastName = user.lastName;

  /**
 * User_Edit function to modify user's name
 * @name Edit
 * @returns {JSX}
 */

  const edit = () => {
    dispatch(editUsers(newFirstName, newLastName));
    setEditName(false);
  };
  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}
          </h1>
        </div>
        {editName ? (
          <div>
            <input
              className="edit-input"
              value={newFirstName}
              placeholder={firstName}
              type="text"
              onChange={(e) => {
                setNewFirstName(e.target.value);
              }}
            />
            <input
              className="edit-input"
              value={newLastName}
              placeholder={lastName}
              type="text"
              onChange={(e) => {
                setNewLastName(e.target.value);
              }}
            />
            <button
              className="edit-button"
              type="submit"
              value="Save"
              onClick={edit}
            >
              Save
            </button>

            <button
              className="edit-button"
              type="button"
              value="Cancel"
              onClick={() => {
                setEditName(false);
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          <input
            className="edit-button"
            type="button"
            onClick={() => {
              setEditName(true);
            }}
            value="Edit Name"
          />
        )}

        <h3 className="sr-only">Accounts</h3>

<section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
        
      </main>
    </>
  );
};

export default User;

/**
 * Amélioration futur:
 *
 
 * CREER UN DOSSIER DATA
 * 
 * const accountData = [
  {
    id: "account-01",
    title: "Argent Bank Checking (x8349)",
    amount: 2082.79,
    description: "Available Balance",
  },
  {...},
  {...},
];
export default accountData;


*Crée un composant: 
import PropTypes from "prop-types";

const Account = ({ title, amount, description }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">$ {amount.toLocaleString("en-US")}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Account;

*

*Et on rappele les données via
import accountData from "../../../data/accountData";
*import Account from "../../components/Account/Account";
*import PropTypes from "prop-types";

* {accountData.map((account, index) => (
          <Account
            key={index}
            title={account.title}
            amount={account.amount}
            description={account.description}
          />
        ))}

 */