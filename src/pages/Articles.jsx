import axios from "axios";
import { useEffect, useState } from "react";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites") || "[]") // Retrieve favorites from localStorage
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("/wildlife.json");
        setArticles(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticles();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Persist the favorites to localStorage whenever it changes
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleFavoriteToggle = (articleId) => {
    if (favorites.includes(articleId)) {
      // Remove from favorites
      setFavorites(favorites.filter((id) => id !== articleId));
    } else {
      // Add to favorites
      setFavorites([...favorites, articleId]);
    }
  };

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
          <h1 className="text-4xl font-bold text-gray-800">Explore Wildlife</h1>
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
                  backgroundImage: `url(/images/images/${article.img}.jpg)`,
                }}
              ></div>
              <div className="p-5">
                <h2 className="text-2xl font-bold text-gray-800">{article.name}</h2>
                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={() => handleFavoriteToggle(article.id)}
                    className={`text-lg font-bold ${favorites.includes(article.id) ? "text-yellow-500" : "text-gray-600"}`}
                  >
                    {favorites.includes(article.id) ? "Remove from Favorites" : "Add to Favorites"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesPage;
