import React from 'react';

export const MenuCard = ({menuDataAtt}) => {
    console.log(menuDataAtt)
    return (
        <>
        {
          menuDataAtt.map((currElem)=> {
            return(
                <>
                 <div className="card" key={currElem.id}>
                    <h4><b>{currElem.name}</b></h4> 
                    <p> {currElem.category}</p> 
                    <p>price {currElem.price}</p>
                  </div>
                </>
            )
          })
        }
        </>
    )
}

export default MenuCard;