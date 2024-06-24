import React from "react";
import {
  LogoutLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

async function Dashboard() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  return (
    <div className="flex-col min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-lg font-semibold text-gray-800">
        This is a private Dashboard
      </div>
      <div>
        <LogoutLink>Log out</LogoutLink>
      </div>
    </div>
  );
}

export default Dashboard;
