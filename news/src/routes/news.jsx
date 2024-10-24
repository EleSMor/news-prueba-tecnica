import { useLoaderData } from "react-router-dom";
import { getNews } from "../api/news.api";

export async function loader() {
  const news = await getNews();
  return { news };
}

export default function News() {
  const { news } = useLoaderData();

  return (
    <div>
      <h1>News</h1>
      <ul>
        {news.map((eachNews) => {
          return (
            <li key={`${eachNews.id}`}>
              <div id="news">
                <div className="text-center">
                  <div>
                    <h3>{eachNews.title}</h3>
                    <h4>{eachNews.description}</h4>
                    <p>{eachNews.content}</p>
                  </div>
                  <div className="flex justify-evenly">
                    <p>Author: {eachNews.author}</p>
                    <p>{eachNews.date}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
