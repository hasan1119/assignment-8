import React from "react";
import "./body.css";

const Body = (props) => {
  const { members, eventHandler, selectedMembers } = props;
  let total = 0;
  for (const member of selectedMembers) {
    total += Number(member.salary);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <DisplayMember
            eventHandler={eventHandler}
            members={members}
          ></DisplayMember>
        </div>
        <div className="col-3">
          <h3>Player Added: {selectedMembers.length}</h3>
          <h4>Total Cost: ${total}</h4>
          {selectedMembers.map((member) => (
            <SelectedMembers name={member.name}></SelectedMembers>
          ))}
        </div>
      </div>
    </div>
  );
};
function SelectedMembers(props) {
  const { name } = props;
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}
function DisplayMember(props) {
  const { members, eventHandler } = props;
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {members.map((member) => {
        return (
          <div className="my-4" key={member.id}>
            <div className="card" style={{ width: "15rem" }}>
              <img src={member.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">Post: {member.post}</p>
                <p className="card-text">Age: {member.age}</p>
                <p className="card-text">Address: {member.address}</p>
                <p className="card-text">Salary: {member.salary}</p>
                <div>
                  <button
                    onClick={() => eventHandler(member)}
                    className="btn btn-primary"
                  >
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Body;
