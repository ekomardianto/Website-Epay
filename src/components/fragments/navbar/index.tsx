import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.scss";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import LogoutIcon from "@mui/icons-material/Logout";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Link from "next/link";
import Tooltips from "@/components/ui/tooltips";
import { SettingsInputCompositeTwoTone } from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@mui/material";

const Navbar = () => {
  const { data }: any = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // ambil role userSession
  const role = data?.user?.role;
  const name = data?.user?.name;
  const handleClick = async () => {
    setIsLoading(true);
    if (data) {
      await signOut({
        callbackUrl: process.env.NEXTAUTH_URL,
      });
      setIsLoading(false);
    } else {
      await signIn();
      setIsLoading(false);
    }
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__kiri}>
        <Link className={styles.navbar__kiri__logo} href="/">
          <Image
            src="/assets/logo/logo.svg"
            width={100}
            height={90}
            priority={false}
            loading="lazy"
            alt="logo"
          />
        </Link>
      </div>
      <div className={styles.navbar__tengah}></div>
      <div className={styles.navbar__kanan}>
        <div className={styles.navbar__kanan__panel}></div>
      </div>
    </div>
  );
};
export default Navbar;
