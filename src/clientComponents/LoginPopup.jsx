import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clientLogin } from "@/redux/clientSlice/clientAuthSlice";

const LoginPopup = ({ onClose, onLoginSuccess }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.clientAuth);

  const [formData, setFormData] = useState({
    mobileNumber: "",
    name: "",
    city: "",
    email: "",
  });

  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      setEmailError(""); // Clear error when user types
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!formData.email.endsWith("@gmail.com")) {
      setEmailError("Email must be a Gmail address (@gmail.com)");
      return;
    }

    const result = await dispatch(clientLogin(formData));
    if (result.meta.requestStatus === "fulfilled") {
      onLoginSuccess();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded w-full"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <button onClick={onClose} className="mt-3 text-red-500 w-full">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;
