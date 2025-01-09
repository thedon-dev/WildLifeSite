import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([
    {
      "id": 1,
      "title": "Saving the Endangered Rhino",
      "description": "Explore the journey and challenges faced in protecting one of the most endangered species on Earth.",
      "content": "Rhinos are among the most threatened species in the world, facing poaching and habitat loss. Through conservation efforts, dedicated teams are working tirelessly to ensure their survival for future generations...",
      "image": "https://example.com/rhino.jpg",
      "link": "/articles/1"
    },
    {
      "id": 2,
      "title": "The Journey of Migrating Elephants",
      "description": "Learn about the incredible migration of elephants across Africa.",
      "content": "Elephants embark on one of the most extraordinary migrations on Earth. Driven by seasons and survival instincts, their journey showcases the strength and perseverance of these majestic creatures...",
      "image": "https://example.com/elephants.jpg",
      "link": "/articles/2"
    },
    {
      "id": 3,
      "title": "The Secret Life of Tigers",
      "description": "An in-depth look into the behaviors and habits of wild tigers.",
      "content": "Tigers are solitary and territorial animals. This article explores their hunting patterns, mating rituals, and the challenges they face due to habitat destruction and poaching...",
      "image": "https://example.com/tigers.jpg",
      "link": "/articles/3"
    }
  ]
  );
  const [loading, setLoading] = useState(false); 

  // useEffect(() => {
  //   fetch("/articles.json")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch articles.");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setArticles(data.articles);
  //       setLoading(false); 
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching articles:", error);
  //       setLoading(false);
  //     });
  // }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-gray-600">Loading articles...</p>
      </div>
    );
  }

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
