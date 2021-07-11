import React from "react";
import Profile from "./components/profile/profile";
import FriendList from "./components/friends-list/friendList"
import users from "./data/user.json";
import friends from "./data/friends.json";
import stats from './data/statistical-data.json'
import StatisticalList from './components/statistical-data/statistical-data'
import items from './data/transactions.json'
import TransactionHistory from './components/transactions/transactions'
import Style from './App.module.scss'

function App() {
  return (
    <>
      <div className={Style.wrapper}>
        
        <div className={Style.item}>
          <Profile users={users} />
        </div>
        
        <div className={Style.item}>
          <FriendList friends={friends} />
        </div>

      <div className={Style.item}>
          <StatisticalList stats={stats} />
        </div>
        
        <TransactionHistory items={items} />;

        


       
         
                </div>
     </>
        );
      };

      export default App;