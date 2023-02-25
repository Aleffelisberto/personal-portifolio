import type { Icon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface MenuButtonProps {
  icon: Icon;
  isActive?: boolean;
}

export function MenuButton({ icon: Icon, isActive = false }: MenuButtonProps) {
  const [hover, setHover] = useState(false);

  const handleMouseOn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div data-active={isActive} className="h-12 flex justify-center items-center data-[active=true]:border-[#ffffff]">
      <Link href="/" onMouseEnter={handleMouseOn} onMouseLeave={handleMouseOut}>
        <Icon className="transition-colors" strokeWidth={1.5} size={40} color={isActive || hover ? '#2d7228' : '#ffffff'} />
      </Link>
    </div>
  );
}
