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
    <div className="text-center">
      <h1 className="font-bold text-3xl mb-8 border-b border-black">
        Archived News
      </h1>
      {archivedNews.length == 0 ? (
        <h1 className="font-bold text-xl mb-2">
          There are not Archived News yet.
        </h1>
      ) : (
        <NewsList news={archivedNews} />
      )}
    </div>
  );
}
