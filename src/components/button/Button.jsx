const Button = ({ action, children, disabled }) => {
return<button onClick={action} disabled={disabled}>{children}</button>
}

export default Button