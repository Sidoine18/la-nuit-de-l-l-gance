import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/partenariat")({
  beforeLoad: () => {
    throw redirect({ to: "/devenir-partenaire", statusCode: 301 });
  },
});
