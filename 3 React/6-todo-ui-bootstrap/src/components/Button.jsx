const Button = ({btnType, btnText, handler}) => {

  if (btnType === 'success') {
    return <button className="btn btn-success" onClick={handler}>{btnText}</button>;
  
  } else if (btnType === 'danger') {
    return <button className="btn btn-danger" onClick={handler}>{btnText}</button>;
  
  } else {
    return <button className="btn btn-primary" onClick={handler}>{btnText}</button>;
  }
};

export default Button;