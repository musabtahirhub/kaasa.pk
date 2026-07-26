import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-kaasa-dark">
      <AdminSidebar />
      <main className="flex-1 bg-kaasa-dark overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
