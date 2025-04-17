'use client';

import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../../../public/logo.svg';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { CgGitFork } from 'react-icons/cg';
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import Image from 'next/image';

import { CgFileDocument } from 'react-icons/cg';

function NavBar() {
  const [expand, updateExpanded] = useState<boolean | string>(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand as boolean}
      fixed="top"
      expand="md"
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex ms-8">
          <Image src={logo} alt="brand" height={45} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : 'expanded');
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                href="/"
                onClick={() => updateExpanded(false)}
              >
                <div className="d-flex md-justify-content-between align-items-center gap-2 md-gap-2">
                  <AiOutlineHome style={{ marginBottom: '2px' }} />
                  Home
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                href="/about"
                onClick={() => updateExpanded(false)}
              >
                <div className="d-flex md-justify-content-between align-items-center gap-2 md-gap-2">
                  <AiOutlineUser style={{ marginBottom: '2px' }} /> About
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                href="/project"
                onClick={() => updateExpanded(false)}
              >
                <div className="d-flex md-justify-content-between align-items-center gap-2 md-gap-2">
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: '2px' }}
                  />
                  Projects
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                href="/resume"
                onClick={() => updateExpanded(false)}
              >
               <div className="d-flex md-justify-content-between align-items-center gap-2 md-gap-2">
                  <CgFileDocument style={{ marginBottom: '2px' }} />
                  Resume
                </div>
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="d-flex justify-content-between align-items-center gap-2">
                  <ImBlog style={{ marginBottom: '2px' }} /> Blogs
                </div>
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/althaf-dev"
                target="_blank"
                className="fork-btn-inner"
              >
                <div className="d-flex">
                  <CgGitFork style={{ fontSize: '1.2em' }} />{' '}
                  <AiFillStar style={{ fontSize: '1.1em' }} />
                </div>
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
