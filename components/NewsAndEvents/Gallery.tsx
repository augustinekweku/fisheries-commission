"use client";

import { useSearchParams } from "next/navigation";
import { galleryImages } from "@/data/data";
import Pagination from "@/components/Pagination";

const IMAGES_PER_PAGE = 6;

const Gallery = () => {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? parseInt(pageParam) : 1;

  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const selectedImages = galleryImages.slice(
    startIndex,
    startIndex + IMAGES_PER_PAGE
  );

  return (
    <section id="recent-posts" className="recent-posts section">
      <div className="container section-title">
        <h2>Gallery</h2>
        <p>Our Recent Media Highlights</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {selectedImages.map((post) => (
            <div key={post.id} className="col-xl-4 col-md-6">
              <img
                src={`/${post.image}`}
                alt={post.title}
                className="img-fluid rounded"
              />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/gallery"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
