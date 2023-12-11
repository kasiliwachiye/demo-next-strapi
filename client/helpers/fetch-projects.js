import config from "../config";

const fetchProjects = async (params) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      // Set cache control to no-store for dynamic data
      "Cache-Control": "no-store",
    },
  };

  const request = await fetch(
    `${config.api}/api/projects?populate=*&${params}`,
    reqOptions
  );
  const response = await request.json();

  return response;
};

export default fetchProjects;
