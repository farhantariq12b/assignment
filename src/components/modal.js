import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Modal.scss";
import Scrollbar from "react-custom-scrollbars";
import { evenData, fetchData, searchFetchData } from "../actions/contactAction";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
const CustomModal = ({
  show,
  onHide,
  title,
  product,
  showUs,
  even,
  isLoading,
  setSearchTerm,
}) => {
  const [isModalOpens, setIsModalOpens] = useState(false);
  const [val, setVal] = useState(false);
  const [selectProduct, setSelectProduct] = useState("");
  const dispatch = useDispatch();
  const [data, setData] = useState(
    showUs ? product : product?.filter((e) => e.country_id === 225)
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (showUs) {
      const usItems = product?.filter((e) => e.country_id === 225);
      setData(usItems);
    } else {
      setData(product);
    }
  }, [product]);

  const handleSwitchModal = (product) => {
    setSelectProduct(product);

    setIsModalOpens(true);
  };

  const filteredEvenData = () => {
    setVal(!val);
    if (val !== true) {
      const items = product?.filter((e) => e.id % 2 === 0);
      setData(items);
    } else {
      setData(product);
    }
  };
  const filteredUSData = () => {
    dispatch(fetchData({ userId: 1 }));
  };
  const allData = () => {
    dispatch(fetchData({}));
  };

  const debouncedFetch = debounce((query) => {
    dispatch(fetchData({ q: query }));
  }, 800);

  const handleInputChange = (e) => {
    if (e.target.value === "") {
      setData(product);
    } else {
      setSearchText(e.target.value);
      debouncedFetch(e.target.value);
    }
    e.preventDefault();
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header>
          <Modal.Title>
            {isModalOpens ? selectProduct?.title : title}
          </Modal.Title>
        </Modal.Header>
        {isModalOpens ? (
          <Modal.Body>
            <ul
              className="contact-list py-2 px-2 mt-2"
              style={{ border: "1px solid  #46139f", listStyle: "none" }}
            >
              <li key={selectProduct?.id}>
                <b>ID: </b>
                {selectProduct?.id} <br />
                <b>userId: </b>
                {product.userId} <br />
                <b>Title: </b>
                {selectProduct?.title} <br />
                <b>Description:</b> <p>{selectProduct?.body}</p>
              </li>
            </ul>
          </Modal.Body>
        ) : (
          <Modal.Body>
            <input
              type="text"
              placeholder="Search..."
              className="form-control"
              value={searchText}
              onChange={handleInputChange}
            />{" "}
            <br />
            <Scrollbar>
              <ul className="contact-list" style={{ listStyle: "none" }}>
                {data?.map((product) => (
                  <li
                    key={product.id}
                    className=" py-2 px-2 mt-2"
                    style={{ border: "1px solid  #46139f" }}
                    onClick={() => handleSwitchModal(product)}
                  >
                    <b>ID: </b>
                    {product.id} <br />
                    <b>userId: </b>
                    {product.userId} <br />
                    <b>Title: </b>
                    {product?.title} <br />
                    <b>Description:</b> <p>{product.body}</p>
                  </li>
                ))}
              </ul>
            </Scrollbar>
          </Modal.Body>
        )}
        {isModalOpens ? (
          <>
            <Modal.Footer
              style={{
                display: "flex",
                alignItems: "center",
                margin: "auto",
                justifyContent: "center",
              }}
            >
              <Button
                variant="secondary"
                onClick={() => setIsModalOpens(false)}
              >
                Back
              </Button>
            </Modal.Footer>
          </>
        ) : (
          <Modal.Footer
            style={{
              display: "flex",
              alignItems: "center",
              margin: "auto",
              justifyContent: "center",
            }}
          >
            <div className="form-check" onClick={filteredEvenData}>
              <input
                class="form-check-input"
                type="checkbox"
                value={val}
                // defaultChecked={even}
                id="flexCheckChecked"
              />
              <label className="form-check-label" for="flexCheckChecked">
                Even ID's
              </label>
            </div>
            <Button variant="primary" className="btna" onClick={allData}>
              All Contacts
            </Button>
            <Button variant="danger" className="btnb" onClick={filteredUSData}>
              US Contacts
            </Button>

            <Button
              variant="secondary"
              onClick={onHide}
              style={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid #46139f",
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};

export default CustomModal;
