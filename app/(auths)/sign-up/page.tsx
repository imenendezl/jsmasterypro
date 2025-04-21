"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

const SignUp = () => {
  return <AuthForm schema={SignUpSchema} defaultValues={{ username: "", name: "", email: "", password: "" }} formType="SIGN_UP" onSubmit={(data) => Promise.resolve({ success: true, data })} />;
};
export default SignUp;
