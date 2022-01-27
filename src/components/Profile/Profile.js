import styles from './Profile.module.scss';

const Profile = ({ user }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.profileImage}
          src={user.photoSrc}
          alt="profile-img"
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.name}>{user.firstName} {user.lastName}</div>
        <ul className={styles.hobbyList}>
          {user.hobbies.map((hobby) => (
            <li key={hobby.id}>
              {hobby.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
