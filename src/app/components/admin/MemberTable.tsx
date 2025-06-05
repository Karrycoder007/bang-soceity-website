"use client";

import React from "react";
import { supabase } from "../../lib/supabaseClient";

interface Member {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

interface MemberTableProps {
  members: Member[];
  setMembers: React.Dispatch<React.SetStateAction<Member[]>>;
}

export default function MemberTable({ members, setMembers }: MemberTableProps) {
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this member?")) return;

    const { error } = await supabase.from("members").delete().eq("id", id);
    if (error) {
      alert("Failed to delete member: " + error.message);
      return;
    }

    setMembers((prev) => prev.filter((member) => member.id !== id));
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-700 bg-gray-800 shadow-md">
      <table className="w-full min-w-[600px] divide-y divide-gray-700">
        <thead className="bg-gray-900">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Joined</th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {members.length === 0 && (
            <tr>
              <td
                colSpan={4}
                className="px-6 py-4 text-center text-gray-400"
              >
                No members found.
              </td>
            </tr>
          )}
          {members.map(({ id, name, email, created_at }) => (
            <tr key={id} className="hover:bg-gray-700">
              <td className="whitespace-nowrap px-6 py-4 text-gray-200">{name}</td>
              <td className="whitespace-nowrap px-6 py-4 text-gray-200">{email}</td>
              <td className="whitespace-nowrap px-6 py-4 text-gray-400">
                {new Date(created_at).toLocaleDateString()}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-center">
                <button
                  onClick={() => handleDelete(id)}
                  className="rounded bg-red-600 px-3 py-1 text-sm font-medium text-white hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
