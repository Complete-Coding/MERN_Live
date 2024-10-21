const todoItemClientModel = (serverItems) => {
    return {
        id: serverItems.id,
        todoText: serverItems.task, 
        todoDate: serverItems.date,
    }
}
export default todoItemClientModel; 