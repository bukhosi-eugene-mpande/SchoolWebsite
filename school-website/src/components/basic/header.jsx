"use client"

import styles from '../styles/navbar.module.scss'
import Image from 'next/image';

function NavBar() {

  const pages = [
    { Page : "Home", href: "/"},
    { Page : "About", href: "/about"},
    { Page : "Admissions", href: "/admissions"},
    { Page : "News", href: "/news"},
    { Page : "Academics", href: "/academics"},
    { Page : "Arts & Culture", href: "/arts"},
    { Page : "Sports", href: "/sports"},
    { Page : "Contact Us", href: "/contact"},
  ];

  const pageLinks = pages.map((page)=>
    <li key={page.Page}>
      <a className={styles.NavBarLink} href={page.href} > {page.Page} </a>
    </li>
  );
  
  return (

    <header className={styles.background}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block" href="/">
              <span className="sr-only">Home</span>
              <Image
                src="/images/school-badge.svg"
                width={50}
                height={50}
                alt="Saint Paul School Badge"
              />
            </a>
            <h1>
              <a className="block text-3xl font-bold text-gray-900" href="/">
              Proverbs Private College 
              </a>
            </h1>
          </div>

          <div className={styles.LinksWrapper}>
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {pageLinks}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

}

export default NavBar;