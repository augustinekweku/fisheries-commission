import React from "react";

const BlogPosts = () => {
  const posts = [
    {
      id: 1,
      image: "assets/img/blog/blog-post-1.jpeg",
      category: "Politics",
      title: "Implementation of PSMA Regulations",
      excerpt:
        "The Minitry of fisheries and Aquaculture  Development (MoFAD) and the Fisheries [...]",
      authorImage: "assets/img/blog/blog-post-1.jpg",
      authorName: "Maria Doe",
      date: "Jan 1, 2022",
      link: "#",
    },
    {
      id: 2,
      image: "assets/img/blog/blog-post-2.jpeg",
      category: "Technology",
      title: "POLICY BRIEF ON THE INCLUSION OF SMALL FISH IN THE GSFP LAUNCHED",
      excerpt:
        "The Fisheries Commission in Collaboration with the Food and Agriculture Organization (FAO) ([...]",
      authorImage: "assets/img/blog/blog-author.jpg",
      authorName: "John Smith",
      date: "Feb 15, 2022",
      link: "#",
    },
    {
      id: 3,
      image: "assets/img/blog/blog-post-3.jpeg",
      category: "Health",
      title: "WORKSHOP ON THE INCLUSION OF SMALLFISH IN GSFP",
      excerpt:
        "Fisheries Commission in collaboration with the Food and Agriculture Organization (FAO)organized ([...]",
      authorImage: "assets/img/blog/blog-author.jpg",
      authorName: "Jane Doe",
      date: "Mar 10, 2022",
      link: "#",
    },
    {
      id: 4,
      image: "assets/img/blog/blog-post-4.jpg",
      category: "Health",
      title:
        "SECOND COORDINATION MEETING OF POST-HARVEST ACTORS IN THE FISHERIES SECTORHELD",
      excerpt:
        "The Post-Harvest Management and TradeDivision (PHM&TD)of the Fisheries Commission in collaboration ([...]",
      authorImage: "assets/img/blog/blog-author.jpg",
      authorName: "Jane Doe",
      date: "Mar 10, 2022",
      link: "#",
    },
    {
      id: 5,
      image: "assets/img/blog/blog-post-5.jpg",
      category: "Health",
      title:
        "WOMEN IN FISHERIES & AQUACULTURE:RISING ABOVE THE CHALLENGES TO PROVIDE SAFE FISH FOR A HEALTHY SOCIETY",
      excerpt:
        "The role of women in the Fisheries and Aquaculture sector is vital [...]]",
      authorImage: "assets/img/blog/blog-author.jpg",
      authorName: "Jane Doe",
      date: "Mar 10, 2022",
      link: "#",
    },
    {
      id: 6,
      image: "assets/img/blog/blog-post-6.jpg",
      category: "Health",
      title:
        "FAO/ FC HAND OVER COMPONENTS AND ACCESSORIES OF THE FTT OVEN TO FISH PROCESSORS",
      excerpt:
        "The Food and Agriculture Organization (FAO) in collaboration with Fisheries Commission handed[...]",
      authorImage: "assets/img/blog/blog-author.jpg",
      authorName: "Jane Doe",
      date: "Mar 10, 2022",
      link: "#",
    },
  ];

  return (
    <section id="recent-posts" className="recent-posts section">
      <div className="container section-title" data-aos="fade-up">
        <h2>News</h2>
        <p>
          Our Recent News and Articles
          <br />
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <article>
                <div className="post-img">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="img-fluid"
                  />
                </div>

                {/* <p className="post-category">{post.category}</p> */}

                <h2 className="title">
                  <a href={post.link}>{post.title}</a>
                </h2>

                <p className="post-excerpt">{post.excerpt}</p>

                <div className="d-flex align-items-center">
                  {/* <img
                    src={post.authorImage}
                    alt={post.authorName}
                    className="img-fluid post-author-img flex-shrink-0"
                  /> */}
                  <div className="post-meta">
                    {/* <p className="post-author">{post.authorName}</p> */}
                    <p className="post-date">
                      <time>{post.date}</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
