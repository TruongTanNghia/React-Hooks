import React from 'react';

const LearnUseEffect = () => {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Hàm được gọi khi component được render và sau mỗi lần re-render
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      });

    // Hàm được gọi khi component unmount
    return () => {
    };
  }, []); 

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>User List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LearnUseEffect;
