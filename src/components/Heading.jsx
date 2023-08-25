const Heading = ({ heading, paragraph, className }) => {
  return (
    <div className={className}>
      <h1 className="font-bold text-marine-blue text-4xl pt-5">{heading}</h1>
      <p className="text-light-gray text-base">{paragraph}</p>
    </div>
  );
};

export default Heading;
