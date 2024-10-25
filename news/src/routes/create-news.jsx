import { Form, Link, redirect } from "react-router-dom";
import { createNews } from "../api/news.api";

export async function action({ request }) {
  const formData = await request.formData();

  const updates = Object.fromEntries(formData);

  await createNews(updates);

  return redirect(`/news`);
}

export default function CreateNews() {
  return (
    <Form method="post" id="news-form">
      <div className="flex flex-col gap-y-2 max-w-fit">
        <h1 className="font-bold text-3xl mb-8 border-b border-black">
          Create new
        </h1>
        <label className="flex items-center justify-between gap-x-8">
          <span className="font-semibold text-lg">Title</span>
          <input
            placeholder="Title"
            aria-label="Title"
            type="text"
            name="title"
            minLength={3}
            maxLength={40}
            required
          />
        </label>
        <label className="flex items-center justify-between gap-x-8">
          <span className="font-semibold text-lg">Description</span>
          <input
            placeholder="Add a description"
            aria-label="Description"
            type="text"
            name="description"
            required
            minLength={3}
            maxLength={255}
          />
        </label>
        <label className="flex items-center justify-between gap-x-8">
          <span className="font-semibold text-lg">Content</span>
          <input
            type="text"
            name="content"
            placeholder="Insert here the content"
            required
            minLength={10}
            maxLength={1000}
          />
        </label>
        <label className="flex items-center justify-between gap-x-8">
          <span className="font-semibold text-lg">Author</span>
          <input
            placeholder="Name of the author"
            aria-label="Author"
            type="text"
            name="author"
            required
            minLength={3}
            maxLength={40}
          />
        </label>
      </div>
      <p className="flex mt-4 justify-between gap-x-2">
        <button type="submit">Save</button>
        <Link
          className="text-red-800 font-medium text-base border-0 rounded-lg px-2 py-3 shadow-lg bg-white m-0"
          to={"/news"}
        >
          Cancel
        </Link>
      </p>
    </Form>
  );
}
