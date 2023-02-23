export interface LogoProps {
  url: string;
  alt?: string;
}

export function Logo({ url, alt }: LogoProps) {
  return (
    <a href="/">
      <img src={url} alt={alt ? alt : ''} width="100" />
    </a>
  );
}
