const Button = ({ buttonStyle, variant, children, py }) => {
  const buttonStyles = {
    outlined:
      "border border-neon-green-700 rounded-4xl text-neon-green-700 px-6",
   
    filled: {
        normal: "bg-neon-green-700 rounded-4xl px-6 text-black",
        compact: "bg-neon-green-700 rounded px-6 text-black",
    },

   
    ghost: {
        normal: "bg-neon-green-700/5 bg rounded-4xl text-neon-green-700/85 px-6",
        outlined:"bg-neon-green-700/20 border border-neon-green-700/85 bg rounded-4xl text-neon-green-700/85 px-6",
        outlinedPadded:
        "bg-neon-green-700/20 border border-neon-green-700/85 bg rounded-4xl text-neon-green-700/85 px-36",
    }
  };

  const classNames =
    typeof buttonStyles[buttonStyle] === "object" ? buttonStyles[buttonStyle][variant] : buttonStyles[buttonStyle];
  console.log(typeof buttonStyles[buttonStyle]);

  return (
    <button className={`${classNames} font-medium ${py} cursor-pointer`}>{children}</button>
  );
};

export default Button;
