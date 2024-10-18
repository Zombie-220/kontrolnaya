export const Profile = () => {
    return (
        <div className="profile">
            { JSON.parse(localStorage.getItem('user')).name }
        </div>
    );
};