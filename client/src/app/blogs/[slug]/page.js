import Content from "@/components/content";
import fetchBlogs from "../../../../helpers/fetch-blogs";
import config from "../../../../config";
import formatDate from "../../../../utils/formatDate";

const Article = async (props) => {
  const articles = await fetchBlogs(`filters[slug][$eq]=${props.params.slug}`);

  if (articles.data.length === 0) return null;

  const article = articles.data[0];
  
  return (
    <Content
      blogImageSrc={`${config.api}${article.attributes.featuredImage.data.attributes.url}`}
      category={article.attributes.category}
      content={article.attributes.content}
      publishedAt={formatDate(article.attributes.publishedAt)}
      title={article.attributes.title}
    />
  );
};

export default Article;
