const addReview = async() => {
  event.preventDefault()

    const rating = document.getElementById('rating').value;
    // const rating = "1"
    const name = document.getElementById('managerName').value.trim();
    const reviewer = document.getElementById('userName').value.trim();
    const description = document.getElementById('comments').value.trim();
if ( rating && name && reviewer && description) {
      const response = await fetch('/api/ratings',{
        method: 'POST',
        body: JSON.stringify({ rating: parseInt(rating), name, reviewer, description }),
        headers: { 'Content-Type': 'application/json'},

      }); 
    

    if (response.ok) {
        document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

 const test = () =>{
    console.log('testing for add review')
 }
document.querySelector('#ratingForm').addEventListener('submit', addReview);