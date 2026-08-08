"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Pencil,
} from "lucide-react";

export default function ProfilePage() {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    location: "Mumbai, India",
    title: "Frontend Developer",
    experience: "3 Years",
    education: "Bachelor of Computer Science",
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    resume: "Resume Uploaded",
    avatar: "https://i.pravatar.cc/150?img=12",
  });

  return (
    <div className="min-h-screen bg-white text-black py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="border rounded-xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={user.avatar}
              alt="Profile"
              className="w-32 h-32 rounded-full border object-cover"
            />

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-gray-600 mt-1">{user.title}</p>

              <button className="mt-4 inline-flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
                <Pencil size={18} />
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Personal Information */}
          <div className="border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-5">
              Personal Information
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>{user.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>{user.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>{user.location}</span>
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-5">
              Professional Details
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Briefcase size={18} />
                <span>{user.experience}</span>
              </div>

              <div className="flex items-center gap-3">
                <GraduationCap size={18} />
                <span>{user.education}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="border rounded-xl p-6 mt-6">
          <h2 className="text-xl font-semibold mb-5">Skills</h2>

          <div className="flex flex-wrap gap-3">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="border px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Resume Section */}
        <div className="border rounded-xl p-6 mt-6">
          <h2 className="text-xl font-semibold mb-5">Resume</h2>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p>{user.resume}</p>

            <button className="border px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
              Update Resume
            </button>
          </div>
        </div>

        {/* Account Settings */}
        <div className="border rounded-xl p-6 mt-6">
          <h2 className="text-xl font-semibold mb-5">Account Settings</h2>

          <div className="flex flex-wrap gap-4">
            <button className="border px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
              Change Password
            </button>

            <button className="border px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
              Notification Settings
            </button>

            <button className="border px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
              Privacy Settings
            </button>
          </div>
        </div>

        {/* Profile Completion */}  
        <div className="border rounded-xl p-6 mt-6">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Profile Completion</span>
            <span>85%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-black h-3 rounded-full w-[85%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
