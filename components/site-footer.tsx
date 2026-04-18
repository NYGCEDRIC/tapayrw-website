import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from 'next/image'

const footerSocials = [
  {
    href: "https://www.instagram.com/tapayrw/",
    name: "Instagram",
    icon: <InstagramLogoIcon className="h-6 w-6" />,
  },
  {
    href: "https://www.linkedin.com/company/tapayrw/",
    name: "LinkedIn",
    icon: <LinkedInLogoIcon className="h-6 w-6" />,
  }
];

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900/50">
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div className="px-8 p-4 py-16 sm:pb-16">
          <div className="flex flex-col items-center text-center gap-10">
            <Link 
              href="/" 
              className="flex items-center gap-3 transform hover:scale-105 transition-transform duration-200"
            >
              <Image 
                src="/tapayicon.png"
                alt="Tapay Logo"
                width={500}
                height={300}
                className="h-10 w-10 text-primary"
              />
              <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">
                Tapay
              </span>
            </Link>

            <p className="text-lg text-gray-600 dark:text-gray-300 font-medium max-w-xs">
              Paying has never been easier
            </p>
            
            <div className="flex items-center gap-8">
              {footerSocials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 
                           shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:scale-110"
                >
                  <div className="text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary">
                    {social.icon}
                  </div>
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center py-6 px-8 gap-2">
            <div className="flex flex-col sm:flex-row gap-2 items-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
              <span className="font-medium">
                Copyright © {new Date().getFullYear()}{" "}
                <Link 
                  href="/" 
                  className="text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  Tapay
                </Link>
                . All Rights Reserved.
              </span>
              <span className="hidden sm:inline text-gray-400">•</span>
              <span className="font-medium">
                Built with{" "}
                <span className="animate-pulse inline-block">❤️</span>
                {" "}by{" "}
                <Link 
                  href="https://cedric-nyagatare-portfolio.vercel.app/" 
                  target="_blank"
                  className="text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  Cedric
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
