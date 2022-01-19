function Modal(props) {
  function cancelHandler() {
    props.onCancel();  
  }
  
  function onConfirmHandler() {
    props.onConfirm();  
  }

  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
      <button className='btn' onClick={onConfirmHandler}>Confirm</button>
    </div>
  );
}

export default Modal;
