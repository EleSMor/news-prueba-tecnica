import { redirect, useLoaderData } from "react-router-dom";
import { deleteNews, getArchivedNews } from "../api/news.api";
import { NewsList } from "../components/news-list";

export async function loader() {
  const archivedNews = await getArchivedNews();
  return { archivedNews };
}

export async function action({ request }) {
  const formData = await request.formData();

  const updates = Object.fromEntries(formData);

  await deleteNews(updates);

  return redirect(`/archived`);
}

export default function News() {
  const { archivedNews } = useLoaderData();

  return (
    <NewsList
      news={archivedNews}
      title="Archived News"
      emptyMessage={
        archivedNews.length === 0 && "There are not Archived News available."
      }
    />
  );
}
