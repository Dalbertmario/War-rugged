import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.nav}>
        <a href="/">Home</a> <a href="/about">About</a>
        <a href="/contact">Contact</a> <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>

      <div>
        <p>Follow us on:</p>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>{" "}
        |
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>{" "}
        |
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>{" "}
        |
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        |
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
      </div>

      <div>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        <p>
          All patterns and designs are protected by intellectual property rights
          and are the exclusive property of Your Company Name.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
