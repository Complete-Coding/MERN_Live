const formatTime = (time) => {
  return new Date(time).toLocaleString('en-IN', {
    day: 'numeric',
    month: 'long', 
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
}

export default formatTime;