import Button from "./Button";

const TodoItem = ({id, todoText, todoDate}) => {
  return <div class="container">
  <div class="row">
    <div class="col-5 text-truncate">{todoText}</div>
    <div class="col-3">{todoDate}</div>
    <div class="col-2">
      <Button btnType='danger' btnText='Delete'/>
    </div>
  </div>
</div>
}

export default TodoItem;