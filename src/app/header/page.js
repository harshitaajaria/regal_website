
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/about">
            <h3>About</h3>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <h3>Services</h3>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <h3>Portfolio</h3>
          </Link>
        </li>
      </ul>
      <div className="logo">
        {/* You can place your logo here */}
        <Link href="/">
          <h3>
            <img src="/path-to-your-logo.png" alt="Your Logo" />
          </h3>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/blog">
            <h3>Blog</h3>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <h3>Contact</h3>
          </Link>
        </li>
        <li>
          <Link href="/careers">
            <h3>Careers</h3>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
