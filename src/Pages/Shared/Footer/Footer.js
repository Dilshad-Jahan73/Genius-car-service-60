import React from "react";

const Footer = () => {
  return (
    <footer className="text-center mt-5 bg-dark text-white">
      <p>
        <small>Copyright &copy; {new Date().getFullYear()}</small>
      </p>
    </footer>
  );
};

export default Footer;
