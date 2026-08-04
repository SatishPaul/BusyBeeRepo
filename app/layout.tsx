import type { Metadata } from 'next';
import { Providers } from '@/app/providers';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'BusyBee - AI Skills & Prompts Marketplace',
  description: 'Discover, share, and collaborate on AI skills, prompts, workflows, and agents.',
  keywords: ['AI', 'prompts', 'skills', 'agents', 'workflows', 'marketplace'],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://busybee.vercel.app',
    siteName: 'BusyBee',
    title: 'BusyBee - AI Skills & Prompts Marketplace',
    description: 'Discover, share, and collaborate on AI skills, prompts, workflows, and agents.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BusyBee - AI Skills & Prompts Marketplace',
    description: 'Discover, share, and collaborate on AI skills, prompts, workflows, and agents.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-slate-50 text-slate-900">
        <Providers>
          <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
              <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <a href="/" className="font-bold text-xl text-primary-600 hover:text-primary-700">
                    🐝 BusyBee
                  </a>
                  <div className="hidden md:flex gap-6">
                    <a href="/browse" className="text-slate-600 hover:text-slate-900 text-sm font-medium">
                      Browse
                    </a>
                    <a href="/collections" className="text-slate-600 hover:text-slate-900 text-sm font-medium">
                      Collections
                    </a>
                    <a href="/docs" className="text-slate-600 hover:text-slate-900 text-sm font-medium">
                      Docs
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <a href="/submit" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm font-medium">
                    Submit Asset
                  </a>
                </div>
              </nav>
            </header>

            <main className="flex-1">
              {children}
            </main>

            <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold text-white mb-4">Product</h3>
                    <ul className="space-y-2">
                      <li><a href="/browse" className="hover:text-white transition">Browse Assets</a></li>
                      <li><a href="/collections" className="hover:text-white transition">Collections</a></li>
                      <li><a href="/trending" className="hover:text-white transition">Trending</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-4">Community</h3>
                    <ul className="space-y-2">
                      <li><a href="/contribute" className="hover:text-white transition">Contribute</a></li>
                      <li><a href="/guidelines" className="hover:text-white transition">Guidelines</a></li>
                      <li><a href="https://github.com/busybee" className="hover:text-white transition">GitHub</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-4">Resources</h3>
                    <ul className="space-y-2">
                      <li><a href="/docs" className="hover:text-white transition">Documentation</a></li>
                      <li><a href="/api" className="hover:text-white transition">API</a></li>
                      <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-4">Legal</h3>
                    <ul className="space-y-2">
                      <li><a href="/privacy" className="hover:text-white transition">Privacy</a></li>
                      <li><a href="/terms" className="hover:text-white transition">Terms</a></li>
                      <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-slate-800 pt-8 flex justify-between items-center">
                  <p className="text-sm">&copy; 2024 BusyBee. All rights reserved.</p>
                  <p className="text-sm">Made with 🐝 for the AI community</p>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
