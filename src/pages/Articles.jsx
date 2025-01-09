import React, { useEffect, useState } from "react";

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
  ]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch("/articles.json") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setLoading(false); 
      });

    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg font-medium">Loading articles...</p>
      </div>
    );
  }

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
