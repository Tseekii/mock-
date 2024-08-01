const Usercard = ({
  imageUrl
  id,
  firstName,
  age,
  email,
  address,
  phone,
  jobTitles,
}) => {
  return (
    <div>

      <div className="flex w-1/2 justify-between mb-3 border-solid border-blue-500">
      </div>
      <img className="w-30 h-30 rounded-full" src={imageUrl} alt="" />
      <div>
        <p>Дугаар: {id}</p>
        <div>
          <h1>Овог нэр:   {firstName} </h1>
          <p>Нас:{age}</p>
        </div>
        <p>Ажлын байр: {jobTitles}</p>
        <p>Утасны дугаар: {phone}</p>
        <p>Цахим шуудан: {email}</p>
        <p>Хаяг: {address}</p>
      </div>
    </div>
  
    
  
    

  )
}