import React, { useEffect, useState } from "react";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/articles.json") // Ensure the JSON file is in the `public` directory
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        return response.json();
      })
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));

    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-10 pb-24">
      <div className="container mx-auto px-5">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Explore Articles</h1>
          <p className="text-gray-600 mt-2">
            Discover stories, research, and insights about wildlife conservation and the natural world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${
                    article.image || "https://via.placeholder.com/300"
                  })`,
                }}
              ></div>
              <div className="p-5">
                <h2 className="text-2xl font-bold text-gray-800">
                  {article.title}
                </h2>
                <p className="text-gray-600 mt-3">{article.description}</p>
                <a
                  href={article.link || "#"}
                  className="inline-block mt-5 text-blue-600 hover:underline font-medium"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesPage;
