import React, { useEffect } from "react";
import useStore from "../stores/categoriesStore";
import { Link } from "react-router-dom";

const Categories = () => {
  const retrieveCategory = useStore((state) => state.retrieveCategory);
  const categories = useStore((state) => state.categories);
  const deleteCategory = useStore((state) => state.deleteCategory);
  let counter = 1;

  useEffect(() => {
    retrieveCategory();
  }, []);

  let removeCategory = (category) => {
    deleteCategory(category).then(() => retrieveCategory());
    console.log("in this filed ", category);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div class="p-2 shadow-md sm:rounded-lg mt-48">
        <table class="w-full text-sm text-left text-gray-700 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Sr No.
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c) => (
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={c._id}
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {counter++}
                </th>
                <Link to={`/admin/categoriesform/${c._id}`}>
                  <td class="px-6 py-4">{c.name}</td>
                </Link>
                <td class="px-6 py-4">
                  <button onClick={() => removeCategory(c._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Categories;
