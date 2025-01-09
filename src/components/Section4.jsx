import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/articles.json")
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <section className="bg-gray-100 py-20 px-[5%] lg:px-[10%]">
      <div className="2xl:container mx-auto">
        <h1 className="text-4xl font-bold mb-10">Articles</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white shadow-md rounded-lg p-5 border border-gray-200"
            >
              <h2 className="text-2xl font-semibold mb-3">{article.title}</h2>
              <p className="text-gray-600">{article.description}</p>
              <div className="mt-5">
                <Link
                  to={`/articles/${article.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesPage;
