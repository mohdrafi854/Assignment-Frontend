import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { createLogin } from "../services/taskService";
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [loginData, setLoginData] = useState("")
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("")
    try {
      if (!email || !password || !role) {
        setMessage("All fields are requied");
        return
      }

      const data = {
        email,
        password,
        role,
      };

      const response = await createLogin(data);
      const token = response.data.token
      localStorage.setItem("token", token)

      const decoded = jwtDecode(token);
      const userROle = decoded.role || "Engineer"
      localStorage.setItem("role", userROle)

      if(decoded.role === "Admin"){
        navigate("/admin-dashboard")
      }else{
        navigate("/engineer-dashboard")
      }

      setLoginData(response.data.message)

    } catch (error) {
        console.error("Server Error", error.message)
        setMessage(error.response.data.error)
    }
  };

  useEffect(() => {
    document.body.className = "bg-gray-100 flex items-center justify-center min-h-screen"

    return () => {
        document.body.className = ""
    }
  }, [])
  return (
    <div className="w-full max-w-sm p-8 bg-white rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Login
      </h2>

      <form className="space-y-5" onSubmit={handleLogin}>
        <div>
          <label htmlFor="email" className="block mb-1 text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="role" className="block mb-1 text-gray-700">
            Role
          </label>
          <select
            id="role"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select role</option>
            <option value="Admin">Admin</option>
            <option value="Engineer">Engineer</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </div>
        {message && <p>{message}</p>}
        {loginData && <p>{loginData}</p>}
      </form>
    </div>
  );
};

export default Login;
