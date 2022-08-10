import React from "react";
import Link from "next/link";
import categories from "../data/category.json";
const CategoryList = () => {
  return (
    <div className="container mt-160">
      <div className="category-list">
        {categories.map((category) => (
          <Link key={category.id} href={`${category.slug}`}>
            <div className=" category-btn mx-1 mb-1">

              <a className="category-name" key={category.id}>
                {category.category}
              </a>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
