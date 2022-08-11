import React, { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase";
import { query, collection, onSnapshot } from "firebase/firestore";
import Users from "./components/Users";

function App() {

  const [usersData, setUsersData] = useState([]);
  const [search, setSearch] = useState('');

  //Create user

  /* Create code later... */


  /* ====================== */
  //Read user from firebase

  useEffect(() => {
    const q = query(collection(db, "users"));
    const unsubcribe = onSnapshot(q, (querySnapshot) => {
      let usersArr = [];
      querySnapshot.forEach((doc) => {
        usersArr.push({ ...doc.data(), id: doc.id });
      });
      setUsersData(usersArr);
    });
    return () => unsubcribe();
  }, []);

  /* =============================== */
  //Delete user

  /* Delete code later... */

  console.table(usersData);

  return (
    <div className="App">
      <div className="header">
        <h1 className="text"><b onClick={()=> console.log('Create page later')}>C</b>ontent</h1>
      </div>
      <Users usersData={usersData} search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;
