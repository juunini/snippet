import { LoginButton, LoginForm } from "./LoginComponents";

export default function GitHubLoginButton() {
  return (
    <LoginForm provider="github">
      <LoginButton src="/github.svg" alt="GitHub Logo">
        Login with GitHub
      </LoginButton>
    </LoginForm>
  );
}
