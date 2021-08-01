
const Navbar = ({filterItemAttr, menuListAttr}) => {
    return(
        <>
         <div className="topnav">
            {menuListAttr.map((currElem) => {
                return(
                    <>
                      <button key={currElem.id} onClick={() => filterItemAttr(currElem)}>
                        {currElem}
                      </button>
                    </>
                )
            })}
         </div>
        </>
    )
}

export default Navbar;