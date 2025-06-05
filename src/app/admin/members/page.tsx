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
      console.log("Fetched members:", data);
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
        <div className="overflow-auto max-h-[70vh] border border-gray-700 rounded">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-400 text-left">
                <th className="p-2 border-r border-gray-600">Name</th>
                <th className="p-2 border-r border-gray-600">Email</th>
                <th className="p-2 border-r border-gray-600">Paid</th>
                <th className="p-2">Joined</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id} className="border-t border-gray-600">
                  <td className="p-2 border-r border-gray-700">{member.name}</td>
                  <td className="p-2 border-r border-gray-700">{member.email}</td>
                  <td className="p-2 border-r border-gray-700">
                    {member.paid ? "✅ Yes" : "❌ No"}
                  </td>
                  <td className="p-2">
                    {new Date(member.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
