
"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import {
  isRequired,
  hasMinLength,
} from "@/lib/validation";

export default function CreateProjectForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("planning");
  const [priority, setPriority] = useState("medium");
  const [errors, setErrors] = useState({
    name: "",
    description: "",
  });
  const [success, setSuccess] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newErrors = {
      name: "",
      description: "",
    };

    if (!isRequired(name)) {
      newErrors.name = "Project name is required.";
    } else if (!hasMinLength(name, 3)) {
      newErrors.name = "Project name must contain at least 3 characters.";
    }

    if (!isRequired(description)) {
      newErrors.description = "Project description is required.";
    }

    setErrors(newErrors);
    setSuccess("");

    if (newErrors.name || newErrors.description) {
      return;
    }

    const project = {
      name: name.trim(),
      description: description.trim(),
      status,
      priority,
    };

    console.log("Created project:", project);

    setSuccess("Project details validated. Demo mode does not save this project.");

    setName("");
    setDescription("");
    setStatus("planning");
    setPriority("medium");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">
      <Input
        id="project-name"
        label="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter project name"
        error={errors.name}
      />

      <Input
        id="project-description"
        label="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe your project"
        error={errors.description}
      />

      <Select
        id="project-status"
        label="Project Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        options={[
          { label: "Planning", value: "planning" },
          { label: "In Progress", value: "in-progress" },
          { label: "Completed", value: "completed" },
        ]}
      />

      <Select
        id="project-priority"
        label="Project Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        options={[
          { label: "Low", value: "low" },
          { label: "Medium", value: "medium" },
          { label: "High", value: "high" },
        ]}
      />

      {success && (
        <p className="text-sm text-green-600" role="status">
          {success}
        </p>
      )}

      <Button type="submit">
        Create Project
      </Button>
    </form>
  );
}
