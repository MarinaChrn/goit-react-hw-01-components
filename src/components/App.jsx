import { Profile } from "./profile/Profile";
import user from './user';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        marginLeft: '50px',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      <Profile  username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}/>
    </div>
  );
};
