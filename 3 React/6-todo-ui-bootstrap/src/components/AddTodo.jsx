import Button from "./Button";

const AddTodo = () => {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-5">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Todo Here"
          ></input>
        </div>
        <div class="col-3">
          <input type="date" class="form-control"></input>
        </div>
        <div class="col-2">
          <Button btnType='success' btnText='Add'/>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
