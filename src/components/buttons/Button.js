

 const Button = ({isValid, children, ...props}) => {

    return(
  <button  {...props}>{children}</button>
  )
};

export default Button
