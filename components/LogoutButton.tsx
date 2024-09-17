import { signOut } from "@/lib/auth";
import styles from "./login/styles.module.css";

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className={styles.form}
    >
      <button type="submit" className={styles.button}>
        Logout
      </button>
    </form>
  );
}
