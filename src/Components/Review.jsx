import React from "react";
import "./review.css";
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import { useParams } from "react-router-dom";

function Review() {
    const hasSubmitted = useRef(false);
    const { name } = useParams();
    const companyName  = name;
    // alert(companyName)
    const [form, setFormdata] = useState({
        name: "",
        company_name: "",
        review_text: "",
        company: companyName,
        rating: 0
    });
    const [rating, setRating] = useState(form.rating || 0);
    const handleFormData = (e) => {
        if(form.company===''){
            alert('No company Selected');
            return;
        }
        setFormdata({ ...form, [e.target.name]: e.target.value });

        console.log(form);
    }
     const handleRating = (value) => {
        setRating(value);
        console.log(value);
        setFormdata((prevForm) => ({
            ...prevForm,
            rating: value
        }));
    };
    const HandleSubmit = async (e) => {
        e.preventDefault();
    
        if (hasSubmitted.current) return;
        hasSubmitted.current = true;

        try {
            const response = await axios.post("http://localhost:8000/review.php", form, {
                headers: {
                    "Content-Type": "application/json"
                },
                timeout: 5000
            });
    
            if (response.data.success) {
               toast.success(response.data.message);
                setFormdata({
                    name: "",
                    company_name: "",
                  
                    review_text: "",
                    rating: ""
                });
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            
            toast.error("An error occurred!"+error);
        } finally {
            hasSubmitted.current = false;
        }
    };
    
    return (
        <>
            <section id="Review">
                <div className="wrap"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                        <h1>What Our Customers Say <br /> <span className="Hero-heading"> Genuine Reviews</span> Honest Experiences</h1>

                        </div>
                    </div>
                </div>
            </section>
            <section id="Review2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12" id="Review-form">
                            <h1>Fill Out the Form to Leave a Review</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12" id="Review-text">
                            <form onSubmit={HandleSubmit}>
                                <div className="name">
                                    <label htmlFor="name">Your Name:</label><br />
                                    <input type="text" placeholder="Name" name="name" id="name" className="form-control" onChange={handleFormData} value={form.name} required />
                                </div>
                                <div className="name">
                                    <label htmlFor="company-name">Company Name:</label><br />
                                    <input type="text" placeholder="Company Name " name="company_name" id="company-name" className="form-control" onChange={handleFormData} value={form.company_name} required />
                                </div>
                                <div className="name">
                                <input type="text" hidden placeholder="Company Name " name="company" id="Company" className="form-control" onChange={handleFormData} value={companyName} required />
                                </div>
                                {/* <div className="name">
                                    <label htmlFor="heading">Subject:</label><br />
                                    <input name="main_line" id="heading" className="form-control" rows="5" placeholder="Main Heading ....." onChange={handleFormData} value={form.main_line} required />
                                </div> */}
                                <div className="name">
                                    <label htmlFor="review">Review:</label><br />
                                    <textarea name="review_text" id="review" className="form-control" rows="5" placeholder="Write your review here..." onChange={handleFormData} value={form.review_text} required />
                                </div>
                                <div className="name">
            <label htmlFor="rating">Rating:</label><br />
            <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                        key={star}
                        size={30}
                        className={star <= rating ? "star selected" : "star"}
                        onClick={() => handleRating(star)}
                    />
                ))}
            </div>
        </div>
                                <button type="submit" className="btn btn-success">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
 <ToastContainer />
        </>

    )
}
export default Review;