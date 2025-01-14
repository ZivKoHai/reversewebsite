"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type TransitionLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function TransitionLink({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.body.classList.add("page-transition");
    router.push(href);
    await sleep(500);

    await sleep(500);
    document.body.classList.remove("page-transition");
  };

  return (
    <Link
      onClick={handleTransition}
      href={href}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
