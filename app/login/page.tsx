import LoginComponent from "@/components/login/login";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return <LoginComponent />;
}
