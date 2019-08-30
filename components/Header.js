import { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header>
      <Navbar expand="lg" fixed="top">
        <Link href="/" passHref>
          <NavbarBrand style={{ fontWeight: 'bold' }}>
            <img src="/static/images/logo-small.png" alt="AzerothCore logo" style={{ maxWidth: '24px' }} /> AzerothCore
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={() => setOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar style={{ justifyContent: 'space-between' }}>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/AzerothCore/">
                <FontAwesomeIcon icon={['fab', 'github']} /> Repositories
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <FontAwesomeIcon icon="users" /> Community
              </DropdownToggle>
              <DropdownMenu>
                <ul style={{ padding: '0', listStyle: 'none' }}>
                  <li>
                    <NavLink href="https://github.com/azerothcore/forum/issues/">
                      <FontAwesomeIcon icon="newspaper" /> Forum
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="http://azerothcore.altervista.org/wp/">
                      <FontAwesomeIcon icon="rss" /> Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="https://stackoverflow.com/questions/tagged/azerothcore?sort=newest">
                      <FontAwesomeIcon icon={['fab', 'stack-overflow']} /> StackOverflow
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="https://discord.gg/gkt4y2x">
                      <FontAwesomeIcon icon="comments" /> Chat
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="https://www.bountysource.com/teams/azerothcore">
                      <FontAwesomeIcon icon="dollar-sign" /> Bountysource
                    </NavLink>
                  </li>
                </ul>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link href="/modules/" passHref>
                <NavLink>
                  <FontAwesomeIcon icon="cloud-download-alt" /> Modules
                </NavLink>
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <FontAwesomeIcon icon="info-circle" /> Info
              </DropdownToggle>
              <DropdownMenu>
                <ul style={{ padding: '0', listStyle: 'none' }}>
                  <li>
                    <NavLink href="https://github.com/azerothcore/forum/issues/">
                      <FontAwesomeIcon icon={['fab', 'wikipedia-w']} /> Wiki
                    </NavLink>
                  </li>
                  <li>
                    <NavItem>
                      <Link href="/testimonials/" passHref>
                        <NavLink>
                          <FontAwesomeIcon icon="thumbs-up" /> Testimonials
                        </NavLink>
                      </Link>
                    </NavItem>
                  </li>
                </ul>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link href="/donations/" passHref>
                <NavLink>
                  <FontAwesomeIcon icon="cloud-download-alt" /> Donations
                </NavLink>
              </Link>
            </NavItem>
          </Nav>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink className="nav-link_social" href="https://www.facebook.com/AzerothCore/">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link_social" href="https://twitter.com/azeroth_core">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link_social" href="https://www.linkedin.com/company/azerothcore">
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
