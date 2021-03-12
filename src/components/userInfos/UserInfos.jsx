import React, { useEffect, useState } from "react";

const UserInfos = ({ user, setUser }) => {
  const [isEmail, setIsEmail] = useState(false);
  useEffect(() => {
    if (user.email.match(/^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
    console.log("test", isEmail);
  }, [user.email]);

  return (
    <>
      <h1>Modifier les informations</h1>
      <p>
        firstname:
        <input
          type="text"
          value={user.firstname}
          onChange={(event) =>
            setUser({ ...user, firstname: event.target.value })
          }
        />
      </p>
      <p>
        lastname:
        <input
          type="text"
          value={user.lastname}
          onChange={(event) =>
            setUser({ ...user, lastname: event.target.value })
          }
        />
      </p>
      <p>
        email:
        <input
          type="text"
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />
        {!isEmail && <p>Adresse mail incorrect</p>}
      </p>
    </>
  );
};

export default UserInfos;
