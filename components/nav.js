import Link from 'next/link'
import React from 'react'

const links = [
  {href: '/', label: 'About'},
  {href: '/', label: 'Projects'},
  {href: '/', label: 'Contact'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      {links.map(({key, href, label}) => (
        <li key={key}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
      }
      ul {
        display: grid;
        grid-auto-flow: column;
        justify-content: flex-end;
        gap: 1rem;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav
