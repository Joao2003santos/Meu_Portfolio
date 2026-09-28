import Link from 'next/link';

export function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Nome */}
        <Link href="/" className="font-bold text-xl text-gray-900">
          João<span className="text-blue-600">.Portfolio</span>
        </Link>

        {/* Links de Navegação */}
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Início
          </Link>
          <Link href="/sobre" className="hover:text-blue-400 transition-colors">
            Sobre
          </Link>
        </div>
      </nav>
    </header>
  );
}