import { getSession } from "@/src/sessions";
import { redirect } from "next/navigation";
import Dashboard from "@/components/ui/dashboard";

export default async function Login() {

	const session = await getSession();
	  if (!session) {
		redirect("/login");
	  }
  return (
    <div>
      <Dashboard />
    </div>
  );
}
