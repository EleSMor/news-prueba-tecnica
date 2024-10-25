import { redirect, useLoaderData } from "react-router-dom";
import { archiveNews, getNews } from "../api/news.api";
import { NewsList } from "../components/news-list";

export async function loader() {
  const news = await getNews();
  return { news };
}

export async function action({ request }) {
  const formData = await request.formData();

  const updates = Object.fromEntries(formData);

  await archiveNews(updates);

  return redirect(`/news`);
}

export default function News() {
  const { news } = useLoaderData();

  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl mb-8 border-b border-black">News</h1>
      <NewsList news={news} />
    </div>
  );
}
