/* eslint-disable react/prop-types */
import { Form } from "react-router-dom";

export const NewsCard = ({ newsItem }) => {
  const { _id, title, description, content, author, date, archiveDate } =
    newsItem;

  return (
    <li key={`${_id}-${date}`}>
      <div id="">
        <div className="flex flex-col bg-white max-w-lg rounded-2xl px-6 py-4 overflow-hidden shadow-lg gap-y-4">
          <div className="text-start mb-4">
            <p className="font-bold text-xl mb-2">{title}</p>
            <p className="text-blue-500 font-semibold text-sm ">
              {description}
            </p>
            <p className="text-gray-900 border-t border-gray-400 text-base">
              {content}
            </p>
          </div>
          <div className="flex flex-col border-t border-gray-400 text-start">
            <p>Author: {author}</p>
            <p>
              {archiveDate ? "Archived: " : "Created: "}
              {new Date(date).toLocaleString().split(",")[0]}
            </p>
          </div>
          <div className="flex justify-between">
            {archiveDate ? (
              <Form
                method="delete"
                intent="Delete"
                onSubmit={(event) => {
                  if (
                    !confirm("Please confirm you want to delete this news.")
                  ) {
                    event.preventDefault();
                  }
                }}
              >
                <input hidden name="id" defaultValue={_id} />
                <button className="text-white bg-red-500" type="submit">
                  Remove
                </button>
              </Form>
            ) : (
              <Form method="post" intent="Archive">
                <input hidden name="id" defaultValue={_id} />
                <button className="text-white bg-blue-500" type="submit">
                  Archive
                </button>
              </Form>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
