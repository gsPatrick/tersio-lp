'use client'; 

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    // Adiciona um body class quando o menu está aberto para prevenir scroll
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/logo.png" // Usando o nome correto do logo
              alt="Tersio IDBAS Advogados Associados Logo"
              width={120}
              height={45}
              priority
            />
          </Link>
        </div>

        {/* Navegação Desktop */}
        <nav className={styles.navDesktop}>
          <Link href="/">Início</Link>
          <Link href="/#sobre">Sobre</Link>
          <Link href="/#atuacao">Áreas de Atuação</Link>
          <Link href="/#equipe">Equipe</Link>
          <Link href="/#contato">Contato</Link>
        </nav>

        {/* Botão do Menu Mobile */}
        <div 
          className={`${styles.menuIcon} ${!isScrolled && !isMenuOpen ? styles.headerTransparent : ''}`} 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX size={35} /> : <FiMenu size={35} />}
        </div>
      </div>

      {/* Menu Mobile Tela Cheia */}
      <div className={`${styles.navMobile} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <Link href="/" onClick={closeMenu}>Início</Link>
        <Link href="/#sobre" onClick={closeMenu}>Sobre</Link>
        <Link href="/#atuacao" onClick={closeMenu}>Áreas de Atuação</Link>
        <Link href="/#equipe" onClick={closeMenu}>Equipe</Link>
        <Link href="/#contato" onClick={closeMenu}>Contato</Link>
      </div>
    </header>
  );
};

export default Header;