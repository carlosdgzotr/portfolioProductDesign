// components/Footer.tsx
import React from "react";

interface FooterProps {
  text?: string;
  icon?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({
  text = "© 2025 Carlos Domínguez",
  icon,
}) => {
  return (
    <footer className="w-full py-4">
      <div className="w-full border-t custom-font-color max-w-[1366px] mx-auto flex justify-between items-center gap-3 pt-6 pb-4">
        <span className="text-sm custom-font-color">{text}</span>
        {icon && <div className="w-5 h-5">{icon}</div>}
      </div>
    </footer>
  );
};

export default Footer;
