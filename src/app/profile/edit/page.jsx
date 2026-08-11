"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    Camera,
    Save,
    UserRound,
    Mail,
    Phone,
    MapPin,
    Briefcase,
    Building2,
    GraduationCap,
    CalendarDays,
    Plus,
    X,
    FileText,
    Upload,
    CheckCircle2,
} from "lucide-react";

const initialUser = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    title: "Frontend Developer",
    company: "Tech Solutions Pvt. Ltd.",
    experience: "3 Years",
    education: "Bachelor of Computer Science",
    availability: "Immediate Joiner",

    avatar:
        "https://i.pravatar.cc/300?img=12",

    resume: "john-doe-resume.pdf",

    skills: [
        "React.js",
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Git",
        "REST API",
    ],
};

export default function EditProfilePage() {
    const [formData, setFormData] =
        useState(initialUser);

    const [skillInput, setSkillInput] =
        useState("");

    const [saved, setSaved] =
        useState(false);

    /* ================================= */
    /* INPUT CHANGE */
    /* ================================= */

    const handleChange = (event) => {
        const {
            name,
            value,
        } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    /* ================================= */
    /* ADD SKILL */
    /* ================================= */

    const addSkill = () => {
        const skill = skillInput.trim();

        if (!skill) return;

        if (
            formData.skills.some(
                (item) =>
                    item.toLowerCase() ===
                    skill.toLowerCase()
            )
        ) {
            setSkillInput("");
            return;
        }

        setFormData((previous) => ({
            ...previous,
            skills: [
                ...previous.skills,
                skill,
            ],
        }));

        setSkillInput("");
    };

    /* ================================= */
    /* REMOVE SKILL */
    /* ================================= */

    const removeSkill = (skill) => {
        setFormData((previous) => ({
            ...previous,
            skills: previous.skills.filter(
                (item) => item !== skill
            ),
        }));
    };

    /* ================================= */
    /* ENTER ADD SKILL */
    /* ================================= */

    const handleSkillKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            addSkill();
        }
    };

    /* ================================= */
    /* SAVE */
    /* ================================= */
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:5000/api/profile",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify({
                        userId: 1,

                        name: formData.name,
                        email: formData.email,

                        phone: formData.phone,
                        location:
                            formData.location,

                        title: formData.title,
                        company:
                            formData.company,

                        experience:
                            formData.experience,

                        education:
                            formData.education,

                        availability:
                            formData.availability,

                        skills:
                            formData.skills,
                    }),
                }
            );

            const data =
                await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    "Failed to save profile"
                );
            }

            setSaved(true);

            setTimeout(() => {
                setSaved(false);
            }, 3000);
        } catch (error) {
            console.error(
                "Save profile error:",
                error
            );

            alert(
                error.message ||
                "Something went wrong"
            );
        }
    };

    return (
        <main className="min-h-screen bg-[#f7f9fc]">
            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">

                {/* ================================= */}
                {/* TOP HEADER */}
                {/* ================================= */}

                <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <Link
                            href="/profile"
                            className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
                        >
                            <ArrowLeft size={17} />
                            Back to Profile
                        </Link>

                        <h1 className="text-3xl font-bold tracking-tight text-slate-950">
                            Edit Profile
                        </h1>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                            Update your personal and professional details to keep your
                            profile accurate.
                        </p>
                    </div>

                    {saved && (
                        <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                            <CheckCircle2 size={18} />
                            Profile saved successfully
                        </div>
                    )}
                </div>

                <form onSubmit={handleSubmit}>

                    {/* ================================= */}
                    {/* PROFILE IMAGE */}
                    {/* ================================= */}

                    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                        <div className="h-28 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600" />

                        <div className="px-5 pb-7 sm:px-8">
                            <div className="-mt-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                                <div className="flex flex-col gap-5 sm:flex-row sm:items-end">

                                    <div className="relative w-fit">
                                        <img
                                            src={formData.avatar}
                                            alt={formData.name}
                                            className="h-28 w-28 rounded-3xl border-4 border-white object-cover shadow-lg"
                                        />

                                        <label
                                            htmlFor="profile-image"
                                            className="absolute -bottom-2 -right-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white shadow-md transition hover:bg-blue-700"
                                        >
                                            <Camera size={16} />
                                        </label>

                                        <input
                                            id="profile-image"
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                        />
                                    </div>

                                    <div className="pb-1">
                                        <h2 className="text-xl font-bold text-slate-950">
                                            Profile Picture
                                        </h2>

                                        <p className="mt-1 max-w-sm text-sm leading-6 text-slate-500">
                                            Upload a professional image. Recommended size is at least
                                            300 × 300 pixels.
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                                >
                                    <Camera size={16} />
                                    Change Photo
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* ================================= */}
                    {/* PERSONAL INFO */}
                    {/* ================================= */}

                    <FormSection
                        title="Personal Information"
                        description="Basic information employers can use to identify and contact you."
                        icon={<UserRound size={21} />}
                    >
                        <div className="grid gap-5 md:grid-cols-2">

                            <FormInput
                                label="Full Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                icon={<UserRound size={17} />}
                                placeholder="Enter your full name"
                            />

                            <FormInput
                                label="Email Address"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                icon={<Mail size={17} />}
                                placeholder="Enter email address"
                            />

                            <FormInput
                                label="Phone Number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                icon={<Phone size={17} />}
                                placeholder="Enter phone number"
                            />

                            <FormInput
                                label="Current Location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                icon={<MapPin size={17} />}
                                placeholder="Example: Mumbai, Maharashtra"
                            />

                        </div>
                    </FormSection>

                    {/* ================================= */}
                    {/* PROFESSIONAL DETAILS */}
                    {/* ================================= */}

                    <FormSection
                        title="Professional Details"
                        description="Tell recruiters about your current career and experience."
                        icon={<Briefcase size={21} />}
                    >
                        <div className="grid gap-5 md:grid-cols-2">

                            <FormInput
                                label="Current Job Title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                icon={<Briefcase size={17} />}
                                placeholder="Example: Frontend Developer"
                            />

                            <FormInput
                                label="Current Company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                icon={<Building2 size={17} />}
                                placeholder="Company name"
                            />

                            <SelectInput
                                label="Total Experience"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                icon={<Briefcase size={17} />}
                                options={[
                                    "Fresher",
                                    "Less than 1 Year",
                                    "1 Year",
                                    "2 Years",
                                    "3 Years",
                                    "4 Years",
                                    "5 Years",
                                    "6 Years",
                                    "7 Years",
                                    "8+ Years",
                                    "10+ Years",
                                ]}
                            />

                            <SelectInput
                                label="Availability"
                                name="availability"
                                value={formData.availability}
                                onChange={handleChange}
                                icon={<CalendarDays size={17} />}
                                options={[
                                    "Immediate Joiner",
                                    "15 Days",
                                    "30 Days",
                                    "45 Days",
                                    "60 Days",
                                    "90 Days",
                                ]}
                            />

                            <div className="md:col-span-2">
                                <FormInput
                                    label="Highest Education"
                                    name="education"
                                    value={formData.education}
                                    onChange={handleChange}
                                    icon={<GraduationCap size={17} />}
                                    placeholder="Example: Bachelor of Computer Science"
                                />
                            </div>
                        </div>
                    </FormSection>

                    {/* ================================= */}
                    {/* SKILLS */}
                    {/* ================================= */}

                    <FormSection
                        title="Skills"
                        description="Add relevant skills recruiters should know about."
                        icon={<GraduationCap size={21} />}
                    >
                        <label className="text-sm font-semibold text-slate-700">
                            Add Skill
                        </label>

                        <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                            <div className="relative flex-1">
                                <Plus
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    value={skillInput}
                                    onChange={(event) =>
                                        setSkillInput(
                                            event.target.value
                                        )
                                    }
                                    onKeyDown={handleSkillKeyDown}
                                    placeholder="Example: Node.js"
                                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                />
                            </div>

                            <button
                                type="button"
                                onClick={addSkill}
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                            >
                                <Plus size={17} />
                                Add Skill
                            </button>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {formData.skills.map(
                                (skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700"
                                    >
                                        {skill}

                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeSkill(skill)
                                            }
                                            className="flex h-5 w-5 items-center justify-center rounded-full transition hover:bg-blue-200"
                                            aria-label={`Remove ${skill}`}
                                        >
                                            <X size={13} />
                                        </button>
                                    </div>
                                )
                            )}
                        </div>
                    </FormSection>

                    {/* ================================= */}
                    {/* RESUME */}
                    {/* ================================= */}

                    <FormSection
                        title="Resume"
                        description="Upload your latest resume for recruiters."
                        icon={<FileText size={21} />}
                    >
                        <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-6">
                            <div className="flex flex-col items-center justify-center text-center">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                                    <Upload size={24} />
                                </div>

                                <h3 className="mt-4 text-sm font-bold text-slate-900">
                                    Upload New Resume
                                </h3>

                                <p className="mt-1 text-xs text-slate-500">
                                    PDF, DOC or DOCX. Maximum file size 5MB.
                                </p>

                                <label
                                    htmlFor="resume"
                                    className="mt-4 cursor-pointer rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                                >
                                    Choose File
                                </label>

                                <input
                                    id="resume"
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    className="hidden"
                                />
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-4 rounded-xl border border-slate-200 p-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500">
                                <FileText size={21} />
                            </div>

                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-semibold text-slate-900">
                                    {formData.resume}
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                    Current resume
                                </p>
                            </div>

                            <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                                Uploaded
                            </span>
                        </div>
                    </FormSection>

                    {/* ================================= */}
                    {/* BOTTOM BUTTONS */}
                    {/* ================================= */}

                    <div className="sticky bottom-4 mt-6 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                            <Link
                                href="/profile"
                                className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                            >
                                Cancel
                            </Link>

                            <button
                                type="submit"
                                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
                            >
                                <Save size={17} />
                                Save Changes
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}

/* ================================= */
/* FORM SECTION */
/* ================================= */

function FormSection({
    title,
    description,
    icon,
    children,
}) {
    return (
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-6 flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    {icon}
                </div>

                <div>
                    <h2 className="text-lg font-bold text-slate-950">
                        {title}
                    </h2>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                        {description}
                    </p>
                </div>
            </div>

            {children}
        </section>
    );
}

/* ================================= */
/* FORM INPUT */
/* ================================= */

function FormInput({
    label,
    name,
    value,
    onChange,
    icon,
    placeholder,
    type = "text",
}) {
    return (
        <div>
            <label
                htmlFor={name}
                className="mb-2 block text-sm font-semibold text-slate-700"
            >
                {label}
            </label>

            <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    {icon}
                </div>

                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm font-medium text-slate-900 outline-none transition placeholder:font-normal placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
            </div>
        </div>
    );
}

/* ================================= */
/* SELECT INPUT */
/* ================================= */

function SelectInput({
    label,
    name,
    value,
    onChange,
    icon,
    options,
}) {
    return (
        <div>
            <label
                htmlFor={name}
                className="mb-2 block text-sm font-semibold text-slate-700"
            >
                {label}
            </label>

            <div className="relative">
                <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    {icon}
                </div>

                <select
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white pl-11 pr-10 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                >
                    {options.map((option) => (
                        <option
                            key={option}
                            value={option}
                        >
                            {option}
                        </option>
                    ))}
                </select>

                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                    ▼
                </div>
            </div>
        </div>
    );
}