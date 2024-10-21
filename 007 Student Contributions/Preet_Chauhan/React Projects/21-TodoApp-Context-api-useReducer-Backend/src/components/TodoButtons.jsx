import '../App.css'
const TodoButtons = ({type,btnText,handler}) => {
    if (type === 'success'){
        return  <button className='btn btn-success button' onClick={handler}>{btnText}</button>;
    }
    else if (type === 'danger'){
        return  <button className='btn btn-danger button' onClick={handler}>{btnText}</button>;
    }
    else if (type === 'info'){
        return  <button className='btn btn-info button' onClick={handler}>{btnText}</button>;
    }
    else {
        return  <button className='test-button button' onClick={handler}>{btnText}</button>;
    }
}
export default TodoButtons;
