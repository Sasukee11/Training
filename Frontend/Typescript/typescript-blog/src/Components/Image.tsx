type ImageProps = {
  src: string;
};

export default function Image({ src }: ImageProps) {
  return <img src={src} className="w-100% h-auto rounded-md" />;
}
