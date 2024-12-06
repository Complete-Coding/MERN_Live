export const exampleServerToClientModel = (serverItem) => {
  return {
    id: serverItem._id,
    text: serverItem.text,
  }
}