import MenuItems from "../data/MenuItems"
import MenuCards from "../components/MenuCards"
import Category from "./Category"
function Menu() {

  return (
    <div className="container">
        <h2>Menu</h2>
        <div className='card-layout'>
        
       
        {MenuItems.map((item) => (
            <MenuCards  key={item.id}>
           
                <div>
                    <h3><span>{item.title}</span> <span>{item.price}</span></h3>
                    <p>{item.description}</p>
                    <h4>Categories</h4>
                    <ul className="pills">
                       
                        {item.beverage ? <Category>Beverage</Category>: null}
                        {item.alcohol ? <Category>Alcohol</Category>: null}
                        {(item.breakfast && (item.lunch === false)) || (item.breakfast &&( item.brunch === false)) ? <Category>Breakfast</Category>: null}
                        {(item.lunch && (item.breakfast === false)) || (item.lunch && (item.brunch === false)) ? <Category>Lunch</Category>: null}

                        {(item.brunch)  || (item.brunch && item.breakfast ) || (item.brunch && item.lunch) || (item.lunch && item.breakfast) ?  <Category>Brunch</Category>: null}
                        {item.dinner ?  <Category>Dinner</Category>: null}
                        {item.appetizer ?  <Category>Appetizer</Category>: null}
                    </ul>
                    {item.special ? (<strong className="special">SPECIAL</strong> ) : null}   
                       
                   
                </div>
                <div className="image" style={{backgroundImage:`url(${item.imageUrl})`}}>
                    
                </div>
          
            </MenuCards>
       
        ))}  
        </div>
    </div>
  )
}

export default Menu