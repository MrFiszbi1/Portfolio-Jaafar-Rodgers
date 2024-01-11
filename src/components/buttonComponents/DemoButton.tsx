interface LinkButtonProps {
    href: string;
}

export function DemoButton({ href }: LinkButtonProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="linkButton">
            Demo
        </a>
    );
}