interface LinkButtonProps {
    href: string;
}

export function LinkButton({ href }: LinkButtonProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="linkButton">
            Visit
        </a>
    );
}