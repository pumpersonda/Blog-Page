export interface VideoProps {
  title: string;
  src: string;
  width: string;
  height: string;
}

export function Video({ title, src, width, height, ...props }: VideoProps) {
  return (
    <div {...props}>
      <iframe title={title} width={width} height={height} src={src}></iframe>
    </div>
  );
}
