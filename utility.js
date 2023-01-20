const stringifyDate = (date) => {
    const options = {day:'numeric',month:'short',year:'numeric'};
    console.log(date+ " ok ")
    const newDate = !date ? "undefined" :
                    new Date(date).toLocaleDateString('en-GB',options);
    return newDate; 
}