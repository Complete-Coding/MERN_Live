const ExampleReducer = (currentItems, action) => {
  switch(action.type) {
    case 'ADD_ITEM': {
      const {id, exampleText} = action.payload;
      return [...currentItems, { id, exampleText }];
    }
    case 'DELETE_ITEM':
      return currentItems.filter(item => item.id !== action.payload.id);
    case 'LOAD_ALL_ITEMS':
      return action.payload.allItems;
      default:
      return currentItems;  
  }
}

export default ExampleReducer;
