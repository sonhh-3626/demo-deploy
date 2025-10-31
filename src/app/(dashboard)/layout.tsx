import Header from './../components/header/Header';
import Sidebar from './../components/sidebar/Sidebar';

interface DashboardLayoutProp {
  children: React.ReactNode;
}

export default async function DashboardLayout({ children }: DashboardLayoutProp) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Sidebar />

      <main className="pt-16 ml-64 p-5">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
