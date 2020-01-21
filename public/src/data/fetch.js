export const fetchData = location => {
    console.log("1", location);
  
    if (!location) {
      return;
    }
  
    console.log(location);
    fetch(`/${location}`)
      .then(response => {
        console.log(response);
        // return response.json();
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  };
  