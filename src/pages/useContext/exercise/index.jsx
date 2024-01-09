import useAuth from "../../../hooks/useAuth";

const UserInfo = () => {
  const { user, login, logout } = useAuth();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: 'center',
      }}
    >
      {user ? (
        <>
          <p>Welcome, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p >Please log in</p>
          <button onClick={() => login("exampleUser")}>Login</button>
        </>
      )}
    </div>
  );
};

export default UserInfo;
