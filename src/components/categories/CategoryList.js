import React, { useEffect, useState } from "react";

export function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(() => {
    setCategories([
      { categoryId: 1, categoryName: "Photos" },
      { categoryId: 2, categoryName: "Employees" },
      { categoryId: 3, categoryName: "Products" },
      { categoryId: 4, categoryName: "Doctors" },
      { categoryId: 5, categoryName: "Patients" },
      { categoryId: 6, categoryName: "Officers" },
      { categoryId: 7, categoryName: "Cities" },
      { categoryId: 8, categoryName: "Addresses" },
    ]);
  }, []);

  return (
    <div className="category border">
      {/* <h1>Category List Page</h1> */}
      <h2>{currentCategory}</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => setCurrentCategory(category.categoryName)}
          >
            {category.categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
