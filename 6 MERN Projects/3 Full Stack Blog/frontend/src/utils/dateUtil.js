const formatDate = (date) => {
    return new Date(date).toLocaleString('en-IN', {
        year: 'numeric',
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

export default formatDate;