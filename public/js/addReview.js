const addReview = async() => {
    const response = await fetch('/ratings',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json'}
    }); 

    if (response.ok) {
        document.location.replace('/');
    } else {
      alert(response.statusText);
    }
};

 const test = () =>{
    console.log('testing for add review')
 }
document.querySelector('#ratingForm').addEventListener('submit', addReview);