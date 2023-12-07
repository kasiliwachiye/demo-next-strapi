import Project from "@/components/project";
import fetchProjects from "../../../../helpers/fetch-projects";
import config from "../../../../config";
import formatDate from "../../../../utils/formatDate";

const ProjectPage = async (props) => {
  const projects = await fetchProjects(
    `filters[slug][$eq]=${props.params.slug}`
  );

  if (projects.data.length === 0) return null;

  const site = projects.data[0];

  return (
    <Project
      projectImage={`${config.api}${site.attributes.projectImage.data.attributes.url}`}
      content={site.attributes.projectDetails}
      publishedAt={formatDate(site.attributes.publishedAt)}
      title={site.attributes.projectName}
    />
  );
};

export default ProjectPage;
