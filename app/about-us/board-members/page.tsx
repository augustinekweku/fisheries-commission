import { boardMembers } from "@/data/data";
import React from "react";

const BoardMembersPage = () => {
  return (
    <div className="container-fluid">
      <div className="container mt-5">
        <div className="container section-title">
          <h2>Board Members</h2>
          <p>THE FISHERIES COMMISSION</p>
        </div>

        <div className="row gy-4 mb-5">
          {boardMembers.map((member, index) => (
            <div className="col-12" key={index}>
              <div className="d-flex align-items-start border rounded p-3 shadow-sm gap-4 flex-column flex-md-row ">
                {/* Profile Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />

                {/* Member Details */}
                <div>
                  <p className="mb-1">
                    <strong>Name:</strong> {member.name}
                  </p>
                  <p className="mb-1">
                    <strong>Institution:</strong> {member.institution}
                  </p>
                  {member.designation && (
                    <p className="mb-1">
                      <strong>Designation:</strong> {member.designation}
                    </p>
                  )}
                  <button className="btn btn-accent btn-sm text-white mt-2 px-4 py-2">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardMembersPage;
