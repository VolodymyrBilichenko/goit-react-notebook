const Profile = (props) => {
  const { username, tag, location, avatar, stats } = props;

  console.log(props);

    return <div class="profile">
        <div className="description">
            <img
            src={avatar}
            alt={tag}
            className="avatar"
            />
            <p className="name">{ username }</p>
            <p className="tag">@{ tag }</p>
            <p className="location">{ location }</p>
        </div>
    
        <ul class="stats">
            <li>
            <span class="label">Followers</span>
            <span class="quantity">{ stats.followers }</span>
            </li>
            <li>
            <span class="label">Views</span>
            <span class="quantity">{ stats.views }</span>
            </li>
            <li>
            <span class="label">Likes</span>
            <span class="quantity">{ stats.likes }</span>
            </li>
        </ul>
    </div>
};

export default Profile;