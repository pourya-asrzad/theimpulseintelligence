type PropsType = {
  source: string;
  type?: string;
  className?: string;
};

export default function Video({source, className}: PropsType) {
  return (
    <video autoPlay loop muted className={className} src={source}>
      {/* <source src={source} type={type} height={'100vh'} /> */}
      {/* <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" /> */}
      Your browser does not support the video tag.
    </video>
  );
}
