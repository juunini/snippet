import Image from "next/image";

import { signIn } from "@/lib/auth";
import styles from "./styles.module.css";

interface LoginFormProps {
  children: React.ReactNode;
  provider: "google" | "github";
}

export function LoginForm({ children, provider }: LoginFormProps) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
      className={styles.form}
    >
      {children}
    </form>
  );
}

interface LoginButtonProps {
  children: React.ReactNode;
  src: string;
  alt: string;
}

export function LoginButton({ children, src, alt }: LoginButtonProps) {
  return (
    <button type="submit" className={styles.button}>
      <Image src={src} alt={alt} width="24" height="24" />
      {children}
    </button>
  );
}
