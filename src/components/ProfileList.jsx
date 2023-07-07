import PropTypes from 'prop-types';
import Profile from './Profile';

function ProfileList({ items }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <Profile
                        username={item.username}
                        tag={item.tag}
                        location={item.location}
                        avatar={item.avatar}
                        stats={item.stats}
                        quantity={item.quantity}
                    />
                </li>
            ))}
        </ul>
    );
};

ProfileList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
};

export default ProfileList;