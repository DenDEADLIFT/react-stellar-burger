import styles from './profile.module.css'
import ProfilePage from '../../components/profile-page/profile-page'
import ProfilePageForm from '../../components/forms/profile-page-form/profile-page-form'

function Profile() {

    return (
        <div className={styles.content_box}>
            <ProfilePage />
            <ProfilePageForm />
        </div>
    );
}

export default Profile;