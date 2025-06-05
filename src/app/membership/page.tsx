"use client";
import { supabase } from "../lib/supabaseClient";
import { useState } from "react";

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    paid: false,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Submitting...");

    const { error } = await supabase.from("memberships").insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        paid: formData.paid,
      },
    ]);

    if (error) {
      console.error("❌ Supabase insert error:", error);
      setMessage(`❌ Error: ${error.message}`);
    } else {
      setMessage("✅ Membership submitted successfully!");
      setFormData({ name: "", email: "", phone: "", paid: false });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4 py-40">
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="input"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="input"
        required
      />
      <input
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className="input"
        required
      />

      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {message && <p>{message}</p>}
    </form>
  );
}
