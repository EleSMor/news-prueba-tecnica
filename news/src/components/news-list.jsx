/* eslint-disable react/prop-types */
import { NewsCard } from "./news-card";

export const NewsList = ({ news }) => {
  return (
    <ul className="flex flex-col gap-y-8">
      {news.length == 0 ? (
        <h1 className="font-bold text-xl mb-2">There are not News yet.</h1>
      ) : (
        news.map((newsItem) => {
          return (
            <NewsCard
              key={`${newsItem._id}-${newsItem.title}`}
              newsItem={newsItem}
            />
          );
        })
      )}
    </ul>
  );
};
