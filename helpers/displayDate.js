

function displayDate(value){
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let date = new Date(value)
  let month = monthNames[date.getMonth()]
  let day = date.getDay()
  let year = date.getFullYear()
  
  return `${day} ${month}, ${year}`
}

module.exports = displayDate
