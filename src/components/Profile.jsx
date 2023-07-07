import PropTypes from 'prop-types';
import defaultImage from './defaultImage.jpg';

const Profile = (props) => {
  const { username, tag, location, avatar, stats, quantity } = props;

  console.log(props);

    return <div className="profile">
        <div className="description">
            <img
            src={avatar ?? defaultImage}
            alt={tag}
            className="avatar"
            />
            <p className="name">{ username }</p>
            <p className="tag">@{ tag }</p>
            <p className="location">{location}</p>
            <p className="myQuantity">Availability: { quantity < 11 ? 'ends' : 'there is also' }</p>
        </div>
    
        <ul className="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{ stats.followers }</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{ stats.views }</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{ stats.likes }</span>
            </li>
        </ul>
    </div>
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,      
    }),
};

export default Profile;