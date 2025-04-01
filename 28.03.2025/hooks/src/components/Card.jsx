import React, { useEffect, useState } from "react";

const Card = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((result) => result.json())
      .then((data) => {
        setUsers(data.results);
      });
  }, []);

  return (
    <div className="row">
      {users.map((user) => (
        <div className="card col-lg-3 " key={user.login.uuid}>
          <img
            src={user.picture.large}
            className="card-img-top"
            alt={user.name.first}
          />
          <div className="card-body">
            <h5 className="card-title">{`${user.name.first} ${user.name.last}`}</h5>
            <p className="card-text">{`${user.location.city} /${user.location.country}`}</p>
            <a href="" className="btn btn-primary">
              {user.email}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
