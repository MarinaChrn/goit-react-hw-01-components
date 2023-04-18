import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({friend, id}) => {
    let color;
    if (friend.isOnline) {
        color = '#008000';
    }
    else {
        color = '#ff0000';
    }
    return (
        <li className={css.item} key={friend.id} id={id}>
            <span className={css.status} style={{backgroundColor: color}}>      
            </span>
            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    friend: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
}