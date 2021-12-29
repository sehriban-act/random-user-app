import React from 'react';

const Infos = ({infos}) => {
  return (
    <>
     {infos.map((person)=>{
         const{image,name,email,tel,location,age,register_date}=person;
return(
    <article key={name} className='person'>
    <img src={image} alt={name}/>
    <div>
    <h3>{name}</h3>
    <h4>{email}</h4>
    <h4>{tel}</h4>
    <h4>{location}</h4>
    <h4>Age:{age}</h4>
    <h4>Register Date:{register_date}</h4>



    </div>

    </article>
)
     })}
    </>
  );
}

export default Infos;
