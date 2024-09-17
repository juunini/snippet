import { LoginButton, LoginForm } from "./LoginComponents";

export default function GoogleLoginButton() {
  return (
    <LoginForm provider="google">
      <LoginButton src="/google.svg" alt="Google Logo">
        Login with Google
      </LoginButton>
    </LoginForm>
  );
}
