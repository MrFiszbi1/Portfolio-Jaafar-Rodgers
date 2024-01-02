interface GitButtonProps {
    href: string;
}

export function GitButton({ href }: GitButtonProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="linkButton">
            <img src="/GitHub-Cat.svg" alt="Link to my GitHub page" className="logo" />
        </a>
    );
}