import Link from 'next/link';

interface LinkProps {
  href: string;
  target?: string;
}

const renderDescription = (
  text: string,
  linkProps: Record<string, LinkProps> = {}
) => {
  const parts = text.split(
    /(\{highlight}.*?\{\/highlight}|\{link}.*?\{\/link})/g
  );
  return parts.map((part, index) => {
    if (part.startsWith('{highlight}') && part.endsWith('{/highlight}')) {
      const highlightedText = part
        .replace('{highlight}', '')
        .replace('{/highlight}', '');
      return (
        <span key={index} className="highlight">
          {highlightedText}
        </span>
      );
    } else if (part.startsWith('{link}') && part.endsWith('{/link}')) {
      const linkText = part.replace('{link}', '').replace('{/link}', '');
      const props = linkProps[linkText] || { href: '#' };
      return (
        <Link
          key={index}
          href={props.href}
          target={props.target}
          className="highlight">
          {linkText}
        </Link>
      );
    }
    return part;
  });
};

export default renderDescription;
