import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    return <Navigate to="/auth" />;
  }

  // dummy image fallback
  const initialData = {
    ...storedUser,
    image: storedUser.image || "https://dummyjson.com/image/150",
  };

  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    localStorage.setItem("user", JSON.stringify(formData));
    setIsEdit(false);
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/auth");
  };

  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6">
        {/* Profile Top */}
        <div className="flex items-center gap-6">
          <img
            src={formData.image}
            alt="user"
            className="w-24 h-24 rounded-full border"
          />

          <div>
            {isEdit ? (
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border px-2 py-1 rounded"
              />
            ) : (
              <h2 className="text-xl font-bold">
                {formData.firstName} {formData.lastName}
              </h2>
            )}

            <p className="text-gray-500">@{formData.username}</p>
          </div>
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {/* Email */}
          <div>
            <p className="text-sm text-gray-400">Email</p>
            {isEdit ? (
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border px-2 py-1 rounded w-full"
              />
            ) : (
              <p>{formData.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <p className="text-sm text-gray-400">Phone</p>
            {isEdit ? (
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border px-2 py-1 rounded w-full"
              />
            ) : (
              <p>{formData.phone}</p>
            )}
          </div>

          {/* City */}
          <div>
            <p className="text-sm text-gray-400">City</p>
            {isEdit ? (
              <input
                type="text"
                name="city"
                value={formData.address?.city || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: {
                      ...formData.address,
                      city: e.target.value,
                    },
                  })
                }
                className="border px-2 py-1 rounded w-full"
              />
            ) : (
              <p>{formData.address?.city}</p>
            )}
          </div>

          {/* Country */}
          <div>
            <p className="text-sm text-gray-400">Country</p>
            {isEdit ? (
              <input
                type="text"
                name="country"
                value={formData.address?.country || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: {
                      ...formData.address,
                      country: e.target.value,
                    },
                  })
                }
                className="border px-2 py-1 rounded w-full"
              />
            ) : (
              <p>{formData.address?.country}</p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => (isEdit ? handleUpdate() : setIsEdit(true))}
            className="px-6 py-2 bg-indigo-600 text-white rounded"
          >
            {isEdit ? "Save" : "Update Info"}
          </button>

          <button
            onClick={handleSignOut}
            className="px-6 py-2 bg-red-500 text-white rounded"
          >
            Sign Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
