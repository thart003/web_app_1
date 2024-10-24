"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-[family-name:var(--font-geist-sans)]">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <div className="flex items-center">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={32}
            height={32}
            priority
          />
          <span className="ml-2 text-xl font-semibold dark:text-white">WriteFlow</span>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            href="/features" 
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Features
          </Link>
          <Link 
            href="/pricing" 
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Pricing
          </Link>
          <Link 
            href="/login" 
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Sign in
          </Link>
          <Link 
            href="/register" 
            className="bg-foreground text-background px-4 py-2 rounded-lg hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto text-center mt-24 px-4">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          Write once,<br />
          publish everywhere
        </h1>
        
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          Create beautiful articles in a familiar document editor and publish directly to your website. No coding required.
        </p>

        {/* Features List */}
        <div className="mt-12 space-y-4">
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
            <div className="text-blue-600">⚡</div>
            Write articles like you would in Google Docs
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
            <div className="text-blue-600">⚡</div>
            One-click publish to your website
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
            <div className="text-blue-600">⚡</div>
            Automatic responsive layouts
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/register"
          className="inline-flex items-center justify-center gap-2 mt-12 px-8 py-3 rounded-full border border-solid border-transparent transition-colors bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Start Writing
          <ArrowRight className="w-4 h-4" />
        </Link>

        {/* Docs Link */}
        <div className="mt-12 flex justify-center">
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </Link>
        </div>
      </main>

      <footer className="fixed bottom-5 w-full flex gap-6 flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </Link>
      </footer>
    </div>
  );
}