import './Profile.css';

const user = {
  name: 'Kendrick Lamar',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <p><h5>Profile:{user.name}</h5></p>
      <img className="avatar" src={user.imageUrl} alt={'Photo of ' + user.name}
        style={{ width: user.imageSize, height: user.imageSize}}/>
    </>
  );
}

export default Profile;