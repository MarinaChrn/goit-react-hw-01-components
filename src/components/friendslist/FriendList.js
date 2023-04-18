import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = (friends) => {
    return (<ul className={css.friendList}>
        {friends.friends.map((friend,idx)=>(
                <FriendListItem friend={friend} id={idx}/>
            ))}
    </ul>)
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
}