import NewsSidebar from "@/components/NewsAndEvents/NewsSidebar";

export default async function FishingClosurePage(): Promise<React.ReactElement> {
  return (
    <section className="container-fluid">
      <div className="container mt-1">
        <div className="row">
          {/* Main Post */}
          <div className="col-lg-8">
            {/* Title */}
            <h2 className="fw-bold mb-3 text-uppercase">
              2025 Closed Season: Industrial trawlers banned from July to August
              2025
            </h2>

            {/* Meta Info */}
            <div className="d-flex justify-content-between align-items-center mt-5 border-bottom pb-2 mb-4 text-muted small flex-wrap">
              <span className="mb-2 mb-md-0">
                <i className="bi bi-calendar3 me-2"></i>
                {new Date("2025-06-23").toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>

              <span className="mb-2 mb-md-0">
                <i className="bi bi-watch me-1"></i>3 mins read
              </span>
            </div>

            {/* Main Image */}
            <img
              src="/assets/img/blog/closed-season-2025.jpg"
              alt="2025 Closed Season"
              className="img-fluid mb-4 rounded shadow"
              style={{
                maxHeight: "500px",
                objectFit: "contain",
                width: "100%",
              }}
            />

            {/* Content */}
            <div className="mx-auto mb-5" style={{ maxWidth: "800px" }}>
              <p>
                The Ministry of Fisheries and Aquaculture Development has
                announced the dates for the 2025 Closed Fishing Season, a key
                government initiative aimed at restoring Ghana's dwindling
                marine fish stock.
              </p>

              <p>
                In a press release dated June 23, 2025, the Ministry revealed
                that industrial trawlers will be banned from fishing between
                July 1 and August 31, 2025, while semi-industrial inshore
                vessels will observe a one-month closure from July 1 to July 31.
              </p>

              <p>
                The directive, issued in collaboration with the Fisheries
                Commission, forms part of national efforts to ensure the
                sustainability of Ghana's fisheries industry, which supports
                millions of livelihoods and contributes significantly to the
                country's food supply.
              </p>

              <p>
                “These measures are in line with Ghana's national fisheries
                strategy and global best practices aimed at the regeneration of
                fish stocks in our oceans,” the statement said.
              </p>

              <p>
                While marine canoe fishers have been exempted from the closed
                season, the Ministry insists this does not free them from other
                fishing regulations.
              </p>

              <p>
                They are required to respect traditional fishing holidays, such
                as the no-fishing Tuesdays, and to avoid illegal practices like
                light fishing, as well as the use of harmful chemicals and
                explosives.
              </p>

              <p>
                “Undersized nets, explosives, light fishing, and all forms of
                IUU (Illegal, Unreported, and Unregulated) fishing will not be
                tolerated,” the statement stressed.
              </p>

              <p>
                The Fisheries Enforcement Unit (FEU), in collaboration with
                local and national authorities, will be on high alert during the
                season to crack down on violators.
              </p>

              <p>
                The Ministry has warned that strict penalties will be imposed on
                individuals or groups that flout the rules.
              </p>

              <p>
                It is also working with scientists and environmental experts to
                evaluate the long-term impacts of the closed season. Plans are
                underway to establish Marine Protected Areas (MPAs) to further
                support Ghana's fisheries sustainability goals.
              </p>

              <p>
                Local assemblies, fisheries associations, and community leaders
                are being called upon to raise awareness and ensure compliance.
              </p>

              <p>
                The Ministry believes that through collective responsibility and
                adherence to the rules, Ghana can secure a healthier, more
                resilient fisheries sector.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <NewsSidebar />
        </div>
      </div>
    </section>
  );
}
