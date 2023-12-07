import config from "../config";

const fetchBlogs = async (params) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  const request = await fetch(
    `${config.api}/api/projects?populate=*&${params}`,
    reqOptions
  );
  const response = await request.json();

  return response;
};

export default fetchBlogs;