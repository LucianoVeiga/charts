"use client"

import BarCharts from "@/components/ui/graphs/barcharts";
import { logout } from "@/src/auth-actions";

export default function Dashboard() {
  return (
	<div>
	  <h1>Home</h1>
	  <button onClick={logout}>Logout</button>
	  <BarCharts></BarCharts>
	</div>
  );
}
