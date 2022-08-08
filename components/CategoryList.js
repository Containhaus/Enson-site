import React from "react";
import Link from "next/link";
import categories from "../data/category.json";
const CategoryList = () => {
  return (
    <div className="container mt-10">
      <div className="category-list">
        {categories.map((category) => (
              <Link href={`${category.slug}`}>
          <div key={category.id} className=" category-btn mx-1">
        
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
