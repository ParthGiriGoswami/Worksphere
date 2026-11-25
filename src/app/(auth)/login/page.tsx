
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { isValidEmail } from "@/lib/validation";
import { saveDemoSession } from "@/lib/demo-auth";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import {
  ShieldCheck,
  Building2,
  BriefcaseBusiness,
  User,
} from "lucide-react";

const roles = [
  {
    label: "Platform Administrator",
    value: "platform-admin",
    icon: ShieldCheck,
    route: "/platform",
  },
  {
    label: "Organization Owner",
    value: "organization-owner",
    icon: Building2,
    route: "/org/demo",
  },
  {
    label: "Project Manager",
    value: "project-manager",
    icon: BriefcaseBusiness,
    route: "/projects",
  },
  {
    label: "Member",
    value: "member",
    icon: User,
    route: "/my-work",
  },
] as const;

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("platform-admin");
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const selectedRole = roles.find((item) => item.value === role);

    if (!selectedRole) {
      setError("Please select a valid role.");
      return;
    }

    setError("");

    saveDemoSession({
      email: email.trim(),
      role: selectedRole.value,
    });

    router.push(selectedRole.route);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md space-y-6 rounded-2xl border border-[var(--border)] bg-[var(--sidebar)] p-8 shadow-lg"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[var(--foreground)]">
            WorkSphere
          </h1>

          <p className="mt-2 text-sm text-[var(--muted)]">
            Sign in to your workspace
          </p>
        </div>

        <Input
          id="email"
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          placeholder="you@example.com"
          error={error}
          required
        />

        <fieldset>
          <legend className="mb-2 block text-sm font-medium text-[var(--foreground)]">
            Select your role
          </legend>

          <div className="space-y-2">
            {roles.map((item) => {
              const Icon = item.icon;

              return (
                <label
                  key={item.value}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 ${
                    role === item.value
                      ? "border-indigo-500 bg-indigo-500/10"
                      : "border-[var(--border)]"
                  }`}
                >
                  <input
                    type="radio"
                    name="role"
                    value={item.value}
                    checked={role === item.value}
                    onChange={(e) => setRole(e.target.value)}
                  />

                  <Icon size={19} aria-hidden="true" />

                  <span className="text-sm text-[var(--foreground)]">
                    {item.label}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <Button type="submit" className="w-full">
          Continue
        </Button>

        <p className="text-center text-xs text-[var(--muted)]">
          Demo login · No password required
        </p>
      </form>
    </main>
  );
}
