import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';
import LinkPrefetch from './LinkPrefetch';
import { getPostList } from '../utils/blog-hooks';
import { getTestimonialsList } from '../utils/testimonials-hooks';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrollPosition, readScrollPosition] = useState(0);
  function getScrollPosition() {
    const actualPosition = window.scrollY;
    readScrollPosition(actualPosition);
  }
  useEffect(() => {
    getScrollPosition();
    window.addEventListener('scroll', getScrollPosition);
    return () => {
      window.removeEventListener('scroll', getScrollPosition);
    };
  }, []);

  return (
    <header>
      <Navbar
        style={
          isOpen
            ? { backgroundColor: '#270c0c' }
            : {
                backgroundColor:
                  scrollPosition > 50 ? '#270c0c' : 'transparent',
              }
        }
        expand="lg"
        fixed="top"
        id="navbar"
      >
        <Link href="/" as={`${process.env.BACKEND_URL}/`}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            style={{ fontWeight: 'bold', color: '#fff' }}
            className="navbar-brand"
          >
            <img
              src={`${process.env.BACKEND_URL}/logo-small.png`}
              alt="AzerothCore logo"
              style={{ maxWidth: '24px' }}
            />{' '}
            AzerothCore
          </a>
        </Link>
        <NavbarToggler onClick={() => setOpen(!isOpen)}>
          <FontAwesomeIcon width="0" icon="bars" />
        </NavbarToggler>
        <Collapse
          isOpen={isOpen}
          navbar
          style={{ justifyContent: 'space-between' }}
        >
          <Nav className="mr-auto azth_main-nav" navbar>
            <NavItem>
              <NavLink href="https://github.com/AzerothCore/">
                <FontAwesomeIcon width="0" icon={['fab', 'github']} />{' '}
                Repositories
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <FontAwesomeIcon width="0" icon="users" /> Community
              </DropdownToggle>
              <DropdownMenu tag="ul">
                <DropdownItem tag="li">
                  <NavLink href="https://github.com/azerothcore/forum/issues/">
                    <FontAwesomeIcon width="0" icon="newspaper" /> Forum
                  </NavLink>
                </DropdownItem>
                <DropdownItem tag="li">
                  <NavLink href="https://stackoverflow.com/questions/tagged/azerothcore?sort=newest">
                    <FontAwesomeIcon
                      width="0"
                      icon={['fab', 'stack-overflow']}
                    />{' '}
                    StackOverflow
                  </NavLink>
                </DropdownItem>
                <DropdownItem tag="li">
                  <NavLink href="https://discord.gg/gkt4y2x">
                    <FontAwesomeIcon width="0" icon="comments" /> Chat
                  </NavLink>
                </DropdownItem>
                <DropdownItem tag="li">
                  <NavLink href="https://www.bountysource.com/teams/azerothcore">
                    <FontAwesomeIcon width="0" icon="dollar-sign" />{' '}
                    Bountysource
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link
                href="/modules"
                as={`${process.env.BACKEND_URL}/modules`}
                passHref
              >
                <NavLink>
                  <FontAwesomeIcon width="0" icon="cloud-download-alt" />{' '}
                  Modules
                </NavLink>
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <FontAwesomeIcon width="0" icon="info-circle" /> Info
              </DropdownToggle>
              <DropdownMenu tag="ul">
                <DropdownItem tag="li">
                  <NavLink href="https://github.com/azerothcore/forum/issues/">
                    <FontAwesomeIcon width="0" icon={['fab', 'wikipedia-w']} />{' '}
                    Wiki
                  </NavLink>
                </DropdownItem>
                <DropdownItem tag="li">
                  <LinkPrefetch
                    href="/testimonials"
                    as={`${process.env.BACKEND_URL}/testimonials`}
                    passHref
                    prepare={getTestimonialsList}
                    className="nav-link"
                  >
                    <FontAwesomeIcon width="0" icon="thumbs-up" /> Testimonials
                  </LinkPrefetch>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <LinkPrefetch
                href="/blog"
                as={`${process.env.BACKEND_URL}/blog`}
                passHref
                prepare={getPostList}
                className="nav-link"
              >
                <FontAwesomeIcon width="0" icon="rss" /> Blog
              </LinkPrefetch>
            </NavItem>
            <NavItem>
              <Link
                href="/donators"
                as={`${process.env.BACKEND_URL}/donators`}
                passHref
              >
                <NavLink>
                  <FontAwesomeIcon width="0" icon="heart" /> Donations
                </NavLink>
              </Link>
            </NavItem>
          </Nav>
          <Nav className="ml-auto azth_main-nav-social">
            <NavItem>
              <NavLink
                className="nav-link_social"
                href="https://www.facebook.com/AzerothCore/"
              >
                <FontAwesomeIcon width="0" icon={['fab', 'facebook-f']} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link_social"
                href="https://twitter.com/azeroth_core"
              >
                <FontAwesomeIcon width="0" icon={['fab', 'twitter']} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link_social"
                href="https://www.linkedin.com/company/azerothcore"
              >
                <FontAwesomeIcon width="0" icon={['fab', 'linkedin-in']} />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <style jsx global>{`
        html,
        body {
          height: 100%;
          position: relative;
        }
        header a {
          color: #fff;
        }
        header a:hover {
          color: #ffc2b3;
        }
        header .navbar-brand:hover {
          color: #fff;
        }
        a {
          color: #d90000;
        }
        a:hover {
          color: #d90000;
        }
        .navbar-toggler {
          color: #fff;
        }
        .nav-link_social {
          padding: 4px;
          border-radius: 50%;
          color: #fff;
          background-color: #ca0000;
          height: 30px;
          width: 30px;
          text-align: center;
          margin: 0 2px;
        }
        .nav-link_social:hover {
          color: #fff;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 1000;
          min-width: 160px;
          padding: 5px 0;
          margin: 2px 0 0;
          text-align: left;
          list-style: none;
          -webkit-background-clip: padding-box;
          background-clip: padding-box;
          background-color: #333;
          border: 1px solid #ccc;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 4px;
          -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
        }
        .dropdown-item:active {
          background-color: #fff;
        }
        .azth_main-nav > li > ul > li:hover a {
          color: #ffc2b3;
        }
        @media (max-width: 991px) {
          .azth_main-nav-social {
            display: none;
          }
        }
        @media (max-width: 767px) {
          .azth_main-nav > li > ul {
            border: none;
            margin: 0 -1rem;
            border-radius: 0px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
