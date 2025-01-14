import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Adjust the path to your Firebase configuration file
import Navbar from "../components/Navbar";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState(null); // To store the user ID
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUserId(user.uid); // Store the user's unique ID
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePrintVoucher = () => {
    window.print();
  };

  return (
    <>
      <Navbar />
      <section className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 w-96">
          <h1 className="text-2xl font-bold text-center mb-6">
            {userId ? "Welcome!" : "Login"}
          </h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {!userId ? (
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Log In"}
              </button>
            </form>
          ) : (
            <div className="text-center">
              <p className="mb-6 text-gray-700">
                Login successful! Here’s your unique ID:
              </p>
              <p className="mb-4 font-bold text-lg">{userId}</p>
              <button
                onClick={handlePrintVoucher}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition"
              >
                Print Voucher
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default LoginPage;
