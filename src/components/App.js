import { Profile } from "./profile/Profile";
import user from './user';
import data from './data';
import { Statistics } from "./statistic/Statistics";

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
      <Statistics  title="Upload stats"  stats={data}/>
    </div>
  );
};
