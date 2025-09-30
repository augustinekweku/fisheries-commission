"use client";

import { boardMembers } from "@/data/data";
import { useTranslations } from "next-intl";

const BoardMembersPage = () => {
  const tPage = useTranslations("board_members_page");
  const tMember = useTranslations("board_members");

  return (
    <div className="container-fluid">
      <div className="container mt-5">
        <div className="container section-title">
          <h2>{tPage("title")}</h2>
          <p>{tPage("subtitle")}</p>
        </div>

        <div className="row gy-4 mb-5">
          {boardMembers.map((member) => {
            const name = tMember(`${member.key}.name`);
            const institution = tMember(`${member.key}.institution`);
            const designation = tMember(`${member.key}.designation`, {
              fallback: "",
            }); // ✅ use fallback

            return (
              <div className="col-12" key={member.key}>
                <div className="d-flex align-items-start border rounded p-3 shadow-sm gap-4 flex-column flex-md-row">
                  <img
                    src={member.image}
                    alt={name}
                    className="rounded"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p className="mb-1">
                      <strong>{tPage("name")}:</strong> {name}
                    </p>
                    <p className="mb-1">
                      <strong>{tPage("institution")}:</strong> {institution}
                    </p>
                    {designation && (
                      <p className="mb-1">
                        <strong>{tPage("designation")}:</strong> {designation}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BoardMembersPage;
