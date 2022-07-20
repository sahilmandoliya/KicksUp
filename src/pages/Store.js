import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import shoesData from  '../data/shoesData';
import FilterSection from "../components/sections/FilterSection";
import DisplaySection from "../components/sections/DisplaySection";
import CartSection from "../components/sections/CartSection";
import DesignSection from "../components/sections/DesignSection";

const Store = () => {
  const [shoes, setShoes] =useState([]);
  const [shoeToShow, setShoeToShow]= useState();
  const [filters, setFilters] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [showDesignSpace, setShowDesignSpace]= useState(false);

  useEffect(()=>{
    let filteredShoes=shoesData;
    if(filters.cost){
      filteredShoes=filteredShoes.filter((shoe)=>
        shoe.price >= filters.cost.min && shoe.price <=filters.cost.max
      );
    }

    if (filters.type) {
      filteredShoes = filteredShoes.filter(
        (shoe) => shoe.type === filters.type
      );
    }
    setShoes(filteredShoes);
  }, [filters]);

  useEffect(()=>{
    const cartItemsFromStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

    setCartItems(cartItemsFromStorage);
  }, []);

  return (
    <Container fluid={true} className="pt-2">
      <Row xs={12}>
        {!showDesignSpace ?(
          <>
          <Col xs={3}>
            <FilterSection filters={filters} setFilters={setFilters} />
          </Col>
          <Col xs={6}>
            <DisplaySection
              shoes={shoes}
              setShoeToShow={setShoeToShow}
              setShowDesignSpace= {setShowDesignSpace}
            />
          </Col>
          </>
        ): (
          <Col xs={9}>
            <DesignSection
              shoeToShow={shoeToShow}
              cartItems={cartItems}
              setCartItems={setCartItems}
              setShowDesignSpace={setShowDesignSpace}
            />
          </Col>
        )}
        <Col xs={3}>
          <CartSection cartItems={cartItems} setCartItems={setCartItems} />
        </Col>
      </Row>
    </Container>
  )
}

export default Store;