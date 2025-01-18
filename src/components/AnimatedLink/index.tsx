export function AnimatedLink({
    href,
    text,
    className,
}: Readonly<{
    href?: string;
    text: string;
    className?: string;
}>) {
    return (
        <a
            href={href}
            target="_blank"
            className={`text-primary cursor-pointer relative transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${className}`}
        >
            {text}
        </a>
    );
}
