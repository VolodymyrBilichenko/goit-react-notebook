import ProfileList from './ProfileList';
import user from '../components/user.json';

export const App = () => {
  // const isOnline = false;

  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >

      {/* {isOnline && 'Online'} */}
      {/* {isOnline ? 'Online' : 'Offline'} */}
      
      {/* <Profile
        username={user[0].username}
        tag={user[0].tag}
        location={user[0].location}
        avatar={user[0].avatar}
        stats={user[0].stats}
        quantity={user[0].quantity}
      />

      <Profile
        username={user[1].username}
        tag={user[1].tag}
        location={user[1].location}
        avatar={user[1].avatar}
        stats={user[1].stats}
        quantity={user[1].quantity}
      />

      <Profile
        username={user[2].username}
        tag={user[2].tag}
        location={user[2].location}
        avatar={user[2].avatar}
        stats={user[2].stats}
        quantity={user[2].quantity}
      /> */}


      {/* {[1, 2, 3, 4, 5, 6, 7].map(el => (
        <div>{el}</div>
      ))} */}

      {/* {user.map(users => 
        <Profile
          key={users.id}
          username={users.username}
          tag={users.tag}
          location={users.location}
          avatar={users.avatar}
          stats={users.stats}
          quantity={users.quantity}
        />
      )} */}

      <ProfileList items={ user } />

    </div>
  );
};
