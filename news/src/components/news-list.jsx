/* eslint-disable react/prop-types */
import { NewsCard } from "./news-card";

export const NewsList = ({ news, title, emptyMessage }) => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl mb-8 border-b border-black">{title}</h1>
      <ul className="flex flex-col gap-y-8">
        {emptyMessage ? (
          <h1 className="font-bold text-xl mb-2">{emptyMessage}</h1>
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
    </div>
  );
};
