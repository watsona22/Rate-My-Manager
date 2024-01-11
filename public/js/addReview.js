const addReview = async() => {
  event.preventDefault()

    const rating = document.getElementById('rating').value;
    const managerName = document.getElementById('managerName').value.trim();
    const userName = document.getElementById('userName').value.trim();
    const comments = document.getElementById('comments').value.trim();

    const response = await fetch('/api/ratings',{
      method: 'POST',
      body: JSON.stringify({ rating: parseInt(rating), managerName, userName, comments }),
      headers: { 'Content-Type': 'application/json'},

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