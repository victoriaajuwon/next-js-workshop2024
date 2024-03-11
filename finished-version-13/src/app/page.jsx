import { authenticateUser } from "@/actions/userActions";
import Login from "@/components/Login";

export default function Home() {
  return (
    <main className="Page HomePage">
      <Login onSubmit={authenticateUser} />
    </main>
  );
}
