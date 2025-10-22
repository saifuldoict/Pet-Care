import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";

const MyProfilePage = () => {
  const { user, loading, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [updating, setUpdating] = useState(false);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (!user) return <p className="text-center mt-20">You must be logged in to view this page.</p>;

  const handleUpdate = async () => {
    setUpdating(true);
    try {
      await updateUserProfile({ displayName: name, photoURL });
      toast.success("Profile updated successfully!"); // ✅ Success toast
    } catch (err) {
      toast.error(err.message); // ✅ Error toast
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <img
          src={photoURL || "https://via.placeholder.com/150"}
          alt={name || "User"}
          className="h-32 w-32 rounded-full mx-auto mb-6 object-cover border-2 border-gray-300"
        />
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="input input-bordered w-full mb-6"
          placeholder="Photo URL"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />
        <button
          onClick={handleUpdate}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          disabled={updating}
        >
          {updating ? "Updating..." : "Update Profile"}
        </button>
      </div>
    </div>
  );
};

export default MyProfilePage;
