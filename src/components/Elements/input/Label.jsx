const Label = (props) => {
    const { htmlFor, children } = props;
    return (
      <label
        htmlFor={htmlFor}
        className="block text-gray-700 text-sm font-semibold mb-1"
      >
        {children}
      </label>
    );
  };
  
  export default Label;
  