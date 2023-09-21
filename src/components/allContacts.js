import React, { useState, useEffect } from "react";
import CustomModal from "./modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/contactAction";
import { useNavigate } from "react-router-dom";
const AllContacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [post, setPosts] = useState([]);
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.dataReducer?.allData);
  const isLoading = useSelector((state) => state.dataReducer?.loading);
  const even = useSelector((state) => state.dataReducer?.isEven);
  const navigate = useNavigate();
  // useEffect(() => {
  //   fetchData();
  // }, []);
  useEffect(() => {
    if (allData?.length > 0) {
      setPosts(allData);
    }
  }, [allData]);
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  useEffect(() => {
    dispatch(fetchData({}));
  }, [dispatch]);

  // console.log("allData", allData);

  return (
    <div>
      {post && (
        <CustomModal
          show={isModalOpen}
          showUs={false}
          loading={isLoading}
          even={even}
          onHide={closeModal}
          title="All Contacts"
          product={post}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default AllContacts;
