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
*[_type == "post"  && publishStatus == $publishStatus] | order(publishedAt desc) [$pageIndex...$limit] {
    "imageUrl": image.asset->url,
     "imageUrl2": image2.asset->url, "imageUrl3": image3.asset->url, "imageUrl4": image4.asset->url,
    slug,
    title,
    category,
    _id,
    body,
    publishedAt,
}
`;

// Get  paginated posts by category
export const paginatedByCategoryquery = groq`
*[_type == "post" && category == $category && publishStatus == $publishStatus]   | order(publishedAt desc) [$pageIndex...$limit] {
    "imageUrl": image.asset->url,
     "imageUrl2": image2.asset->url, "imageUrl3": image3.asset->url, "imageUrl4": image4.asset->url,
    slug,
    title,
    category,
    _id,
    body,
    publishedAt,
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
