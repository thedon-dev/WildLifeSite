import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ArticlePage = () => {
  const { id } = useParams(); 
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/articles.json") 
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch story.");
        return response.json();
      })
      .then((data) => {
        const selectedStory = data.find((article) => article.id === parseInt(id));
        setStory(selectedStory);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching story:", error);
        setLoading(false);
      });
    window.scrollTo(0, 0);

  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-gray-600">Loading story...</p>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-gray-600">Story not found.</p>
        <Link to="/articles" className="text-blue-500 hover:underline">
          Back to Articles
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-gray-100 py-20 px-[5%] lg:px-[10%]">
      <div className="2xl:container mx-auto">
        <h1 className="text-4xl font-bold mb-10">{story.title}</h1>
        <p className="text-gray-600 mb-5">{story.description}</p>
        <div className="text-gray-800">{story.content}</div>
        <div className="mt-10">
          <Link to="/articles" className="text-blue-500 hover:underline">
            Back to Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlePage;
