"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

interface Membership {
  id: string;
  name: string;
  email: string;
  paid: boolean;
  created_at: string;
}

export default function MembersPage() {
  const [members, setMembers] = useState<Membership[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const fetchMembers = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("memberships")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setError("Failed to fetch members.");
      console.error("Supabase error:", error);
    } else {
      setMembers(data || []);
      setError(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMembers();

    const insertSubscription = supabase
      .channel("public:memberships-insert")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "memberships" },
        (payload) => {
          setMembers((prev) => [payload.new as Membership, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(insertSubscription);
    };
  }, []);

  return (
    <div className="p-6 text-black">
      <h1 className="text-2xl font-bold mb-4">Memberships</h1>

      {loading && <p>Loading memberships...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && members.length === 0 && (
        <p className="text-gray-400">No memberships found.</p>
      )}

      {!loading && members.length > 0 && (
        <>
          {/* Table for desktop */}
          {!isMobile && (
            <table className="w-full border-collapse border border-gray-700 rounded">
              <thead>
                <tr className="bg-gray-400 text-left">
                  <th className="p-2 border border-gray-600">Name</th>
                  <th className="p-2 border border-gray-600">Email</th>
                  <th className="p-2 border border-gray-600">Paid</th>
                  <th className="p-2 border border-gray-600">Joined</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.id} className="border border-gray-600">
                    <td className="p-2 border border-gray-700 ">{member.name}</td>
                    <td className="p-2 border border-gray-700">{member.email}</td>
                    <td className="p-2 border border-gray-700">
                      {member.paid ? "✅ Yes" : "❌ No"}
                    </td>
                    <td className="p-2 border border-gray-700">
                      {new Date(member.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Card view for mobile */}
          {isMobile && (
  <div className="space-y-6 px-2">
    {members.map((member) => (
      <div
        key={member.id}
        className="border border-gray-300 rounded-lg p-5 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <p className="mb-2">
          <span className="font-semibold text-gray-700">Name:</span>{" "}
          <span className="text-gray-900">{member.name}</span>
        </p>
        <p className="mb-2">
          <span className="font-semibold text-gray-700">Email:</span>{" "}
          <span className="text-blue-600 break-all">{member.email}</span>
        </p>
        <p className="mb-2">
          <span className="font-semibold text-gray-700">Paid:</span>{" "}
          <span
            className={
              member.paid
                ? "text-green-600 font-semibold"
                : "text-red-600 font-semibold"
            }
          >
            {member.paid ? "✅ Yes" : "❌ No"}
          </span>
        </p>
        <p>
          <span className="font-semibold text-gray-700">Joined:</span>{" "}
          <span className="text-gray-600 text-sm">
            {new Date(member.created_at).toLocaleString()}
          </span>
        </p>
      </div>
    ))}
  </div>
)}
        </>
      )}
    </div>
  );
}
