import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UsersAndTersmsNavbar from "./UsersNavbar";
import { BASE_URL } from "@/constants";

const ChangeCredentials = () => {
  const navigate = useNavigate();
  const initialValues = {
    newEmail: "",
    newPassword: "",
  };

  const validationSchema = Yup.object({
    newEmail: Yup.string().email("Invalid email address").required("Email is required"),
    newPassword: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm password is required"), // Added validation for confirmPassword
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {

      // Get the token from localStorage
      const token = localStorage.getItem("token");

      if (!token) {
        setErrors({ general: "You are not authenticated. Please log in again." });
        return;
      }

      // Decode the token to get the user ID
      const decodedToken = jwtDecode(token);
      const { id } = decodedToken; 

      // Define the API endpoint with the extracted id
      const endpoint = `${BASE_URL}/admin/change-credentials/${id}`;

      // Make the POST request to change credentials
      const response = await axios.patch(
        endpoint,
        { newEmail: values.newEmail, newPassword: values.newPassword, confirmPassword: values.confirmPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );

      // Handle success
      if (response.status === 200) {
        toast.success("Credentials updated successfully!", { autoClose: 3000 });
        navigate('/admin');
      } else {
        setErrors({ general: "Unexpected response from the server." });
      }
    } catch (error) {
      setErrors({ general: "Failed to change credentials. Please try again." });
      toast.error("Failed to change credentials.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <UsersAndTersmsNavbar title="Change Credentials" />
    <div className="flex h-screen ">
      <div className="w-[500px] p-8 bg-white rounded-md">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              <div className="grid grid-cols-1 gap-6 mb-4">
                <div>
                  <label htmlFor="newEmail" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <Field
                    id="newEmail"
                    name="newEmail"
                    type="email"
                    className="w-full p-2 rounded bg-[#F2F2F2] border border-gray-300"
                    style={{ width: "366px" }}
                  />
                  <ErrorMessage
                    name="newEmail"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="newPassword" className="block text-gray-700 mb-2">
                    New Password
                  </label>
                  <Field
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    className="w-full p-2 rounded bg-[#F2F2F2] border border-gray-300"
                    style={{ width: "366px" }}
                  />
                  <ErrorMessage
                    name="newPassword"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className="w-full p-2 rounded bg-[#F2F2F2] border border-gray-300"
                    style={{ width: "366px" }}
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              {errors.general && (
                <div className="text-red-500 text-sm mb-4">{errors.general}</div>
              )}

              <button
                type="submit"
                className="w-[366px] p-2 bg-blue-600 rounded-lg text-white shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Changing..." : "Change Credentials"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    </div>
  );
};

export default ChangeCredentials;