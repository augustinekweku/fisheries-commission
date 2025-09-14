import { groq } from "next-sanity";

// Single Post
export const singlequery = groq`
*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    "imageUrl": image.asset->url,
     "imageUrl2": image2.asset->url, "imageUrl3": image3.asset->url, "imageUrl4": image4.asset->url,
    body,
    publishedAt,
}
`;

// Get paginated posts

export const allPostsPaginatedQuery = groq`
{
  "posts": *[
    _type == "post" &&
    publishStatus == $publishStatus
  ]
  | order(publishedAt desc)
  [$pageIndex...($pageIndex + $limit)]{
    "imageUrl": image.asset->url,
    "imageUrl2": image2.asset->url,
    "imageUrl3": image3.asset->url,
    "imageUrl4": image4.asset->url,
    slug,
    title,
    category,
    _id,
    body,
    publishedAt
  },

  "totalCount": count(*[
    _type == "post" &&
    publishStatus == $publishStatus
  ])
}
`;

export const paginatedByCategoryquery = groq`
{
  "posts": *[
    _type == "post" &&
    category == $category &&
    publishStatus == $publishStatus
  ]
  | order(publishedAt desc)
  [$pageIndex...($pageIndex + $limit)]{
    "imageUrl": image.asset->url,
    "imageUrl2": image2.asset->url,
    "imageUrl3": image3.asset->url,
    "imageUrl4": image4.asset->url,
    slug,
    title,
    category,
    _id,
    body,
    publishedAt
  },

  "totalCount": count(*[
    _type == "post" &&
    category == $category &&
    publishStatus == $publishStatus
  ])
}
`;

// search query with pagination
export const searchquery = groq`
*[_type == "post" && title match $q && publishStatus == $publishStatus] | order(publishedAt desc) [$pageIndex...$limit] {
    "imageUrl": image.asset->url,
    slug,
    title,
    category,
    _id,
    body,
    publishedAt,
}
`;

// Single Resource by ID
export const singleResourceQuery = groq`
*[_type == "resource" && _id == $id][0] {
  _id,
  title,
  category,
  date,
  modifiedAt,
  size,
  "pdfUrl": pdf.asset->url,
  "previewImageUrl": previewImage.asset->url
}
`;

// Get All Resources (Paginated)
export const allResourcesPaginatedQuery = groq`
{
  "resources": *[
    _type == "resource" &&
    category == $category
  ]
  | order(date desc)
  [$pageIndex...($pageIndex + $limit)]{
    title,
    date,
    modifiedAt,
    size,
    category,
    "pdfUrl": pdf.asset->url,
    "previewImageUrl": previewImage.asset->url
  },

  "totalCount": count(*[
    _type == "resource" &&
    category == $category
  ])
}
`;

// Get Resources by Category (Paginated)
export const resourcesByCategoryQuery = groq`
{
  "resources": *[
    _type == "resource" &&
    category == $category
  ]
  | order(date desc)
  [$pageIndex...($pageIndex + $limit)]{
    _id,
    title,
    category,
    date,
    modifiedAt,
    size,
    "pdfUrl": pdf.asset->url,
    "previewImageUrl": previewImage.asset->url
  },

  "totalCount": count(*[
    _type == "resource" &&
    category == $category
  ])
}
`;

// Search Resources by Title (with Pagination)
export const searchResourcesQuery = groq`
*[_type == "resource" && title match $q] 
| order(date desc) 
[$pageIndex...($pageIndex + $limit)] {
  _id,
  title,
  category,
  date,
  modifiedAt,
  size,
  "pdfUrl": pdf.asset->url,
  "previewImageUrl": previewImage.asset->url
}
`;
