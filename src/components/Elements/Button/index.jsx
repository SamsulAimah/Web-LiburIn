const MyButton = (props) => {
    const { classname ="bg-black", text = "...." } = props;
    return (
      <button
        className={`text-white ${classname} font-bold py-2 px-4 rounded cursor-pointer`}
        type="button"
      >
      {text}
      </button>
    );
  };
  
  export default MyButton;