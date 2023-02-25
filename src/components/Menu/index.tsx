'use client';
import { Home, User, Code2, Boxes, Inbox } from 'lucide-react';
import { MenuButton } from './MenuButton';

export function Menu() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-7">
        <MenuButton icon={Home} isActive />
        <MenuButton icon={User} />
        <MenuButton icon={Code2} />
        <MenuButton icon={Boxes} />
        <MenuButton icon={Inbox} />
      </div>
      <div>
        <a href="https://www.linkedin.com/in/alefsandlerfelisberto/" target="_blank" rel="noreferrer" className="flex items-cent gap-1"></a>
      </div>
    </div>
  );
}
