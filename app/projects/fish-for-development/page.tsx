import React from "react";

const FishDevelopmentPage = () => {
  return (
    <section className="container-fluid">
      <div className="container mt-2">
        <div className="row">
          {/* Main Post */}
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            {/* Title */}
            <h2 className="fw-semibold mb-4 text-uppercase">
              Fishes for Development
            </h2>

            {/* Main Image */}
            <img
              src="/assets/img/fisheries.png"
              alt="Fisheries Commission Ghana"
              className="img-fluid mb-4 rounded"
              style={{ objectFit: "cover", width: "100%" }}
            />

            {/* Main Content */}
            <div className="mx-auto mb-5" style={{ maxWidth: "800px" }}>
              <p>
                The Programme for Improved Regional Fisheries Governance in
                Western Africa (PESCAO) is a five-year, European Union-funded
                initiative, implemented with the Economic Community of West
                African States (ECOWAS) Commission. PESCAO has a budget of EUR
                15 million and is running from 2018 to 2023.
              </p>
              <p>
                PESCAO will support the ECOWAS to facilitate cooperation with
                development partners and the two-sub regional fisheries
                organizations, the Fisheries Committee for the West Central Gulf
                of Guinea (FCWC) and the Sub-Regional Fisheries Commission
                (SRFC). PESCAO, through its cooperation with the FCWC will
                support and strengthen existing fisheries mechanisms, such as
                the West Africa Task Force (WATF), while building new
                partnership, such as between the FCWC and the European Fisheries
                Control Agency (EFCA).
              </p>
              <p>
                The objective of PESCAO is to enhance the contribution of
                fisheries resources to sustainable development, food security,
                and poverty alleviation in West Africa. This is being achieved
                through three components:
              </p>
              <ol>
                <li>
                  Addressing regional fisheries policy at the Economic Community
                  of West African States (ECOWAS) level, which will provide both
                  a framework for regional fisheries priorities and also
                  strengthen the impact of regional fisheries bodies by defining
                  more effectively the role and relationships of each
                  organization.
                </li>
                <li>
                  Building the capacities of competent national and regional
                  Monitoring, control and surveillance (MCS) authorities to
                  deter IUU fishing;
                </li>
              </ol>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </section>
  );
};

export default FishDevelopmentPage;
