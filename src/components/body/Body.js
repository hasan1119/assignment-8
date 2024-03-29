import React from "react";
import "./body.css";
import Member from "../member/Member.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontAwesome";

const Body = (props) => {
  const { members, Remove, eventHandler, selectedMembers } = props;

  // calculate total
  let total = 0;
  for (const member of selectedMembers) {
    total += Number(member.salary);
  }

  return (
    <div className="container">
      <div className="row d-flex flex-wrap justify-content-around">
        <div style={{ width: "960px", marginRight: "400px" }}>
          <Member eventHandler={eventHandler} members={members}></Member>
        </div>
        <div className="bg-dark shadow summary">
          <div className="display-employ  pt-2">
            <h3 style={{ fontFamily: "'Roboto', 'sans-serif'" }}>
              Total Selected {selectedMembers.length} Employs
            </h3>
            <h6 className="text-center text-primary">Total Cost: ${total}</h6>
            <hr />
            <ul className="list-unstyled">
              {selectedMembers.map((member) => (
                <SelectedMembers
                  key={member.id}
                  Remove={Remove}
                  name={member.name}
                  img={member.img}
                ></SelectedMembers>
              ))}
            </ul>
          </div>
          <button
            onClick={props.confirm}
            className="btn mb-2 btn-primary w-100"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

function SelectedMembers(props) {
  const { name, img } = props;
  return (
    <li className="text-muted mb-2">
      <img
        style={{
          width: "40px",
          borderRadius: "50%",
          display: "inline-block",
          marginRight: "10px",
        }}
        src={img}
        alt=""
      />
      {name}
      <button className="btn py-1">
        <small onClick={() => props.Remove(name)}>
          <FontAwesomeIcon
            style={{
              color: "#b50000",
              fontSize: "20px",
              cursor: "pointer",
            }}
            icon={["far", "times-circle"]}
          />
        </small>
      </button>
    </li>
  );
}

export default Body;
