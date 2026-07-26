import React from 'react';
import { Bell, User } from 'lucide-react';

export default function AdminHeader({ title }: { title: string }) {
  return (
    <header className="h-20 bg-kaasa-card border-b border-kaasa-border px-8 flex items-center justify-between">
      <h1 className="text-xl font-heading font-semibold text-kaasa-text">{title}</h1>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full bg-kaasa-dark border border-kaasa-border text-kaasa-textMuted hover:text-kaasa-gold">
          <Bell className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-kaasa-border">
          <div className="w-9 h-9 rounded-full bg-kaasa-gold/20 border border-kaasa-gold/40 flex items-center justify-center text-kaasa-gold font-bold text-xs">
            MT
          </div>
          <div className="text-xs">
            <p className="font-semibold text-kaasa-text">Musab Tahir</p>
            <p className="text-kaasa-textMuted text-[10px]">Super Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}
