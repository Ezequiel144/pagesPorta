import React from "react";
import styleNav from './navbar.module.css';
import { Link } from "react-router-dom";
import Logo from '../../assets/2-removebg-preview.png';

export function NavBar(){
    return(
        <header className={styleNav.header}>
            <img className={styleNav.imgLogo} src={Logo} alt="Logo" />
            <nav className={styleNav.navbar}>
                <ul className={styleNav.list}>
                    <li><Link className={styleNav.links}>katanot</Link></li>
                    <li><Link className={styleNav.links}>anbo</Link></li>
                    <li><Link className={styleNav.links}>gap</Link></li>
                    <li><Link className={styleNav.links}>aoctabka</Link></li>
                    <li><Link className={styleNav.links}>jkckypcna</Link></li>
                </ul>
            </nav>
            <section className={styleNav.tel}>
            <span class="material-symbols-outlined">call</span>
                <h3 className={styleNav.number}>+ 7 (495) 123-56-47</h3>
            </section>
            <section className={styleNav.usercartshop}>
                <p>250 p</p>
                <span class="material-symbols-outlined">shopping_cart</span>
                <span class="material-symbols-outlined">person</span>
            </section>
        </header>
    )
}