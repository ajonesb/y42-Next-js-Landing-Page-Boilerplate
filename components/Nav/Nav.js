import React, { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Button from "../Buttons/Button/Button";
import Logo from "../logo/logo";
import LoginIcon from "../LoginIcon/LoginIcon";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.nav__logo__menu__container}>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>

          <Logo />

          <Link href="/login">
            <a>
              <LoginIcon />
            </a>
          </Link>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            <a className={styles.nav__item} href={"/platform"}>
              Platform
            </a>
            <a className={styles.nav__item} href={"/solution"}>
              Solution
            </a>
            <a className={styles.nav__item} href={"/blog"}>
              Blog
            </a>
            <a className={styles.nav__item} href={"/pricing"}>
              Pricing
            </a>
            <div className={styles.nav__mobile_button__wrap}>
              <a className={styles.nav__item} href={"/login"}>
                Log in
              </a>
              <a href="/signup" className={styles.nav__item}>
                <Button variant="teal">Signup</Button>
              </a>
            </div>
          </nav>
        </div>

        <div className={styles.header__button__container}>
          <a className={styles.nav__item} href={"/login"}>
            Login
          </a>
          <a href="/signup" className={styles.nav__item}>
            <Button variant="teal">Signup</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

<a href="/signup" className={styles.nav__item}>
  <Button variant="teal">Signup</Button>
</a>;

export default Nav;
