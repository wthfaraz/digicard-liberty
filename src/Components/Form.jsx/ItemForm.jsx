import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from 'pretty-modal'
import { Link } from 'react-router-dom'



toast.configure()


const ItemForm = () => {

    const [openModal, setOpenModal] = useState(false)


    const [name, Setname] = useState("");
    const [phone, Setphone] = useState("");
    const [cnic, setCnic] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [whatsapp_b, setWhatsapp_b] = useState("");
    const [address, Setaddress] = useState("");
    const [email, Setemail] = useState("");
    const [profile, SetProifle] = useState("");
    const [cover, setCover] = useState("");
    const [age, Setage] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("")
    const [twiter, setTwiter] = useState("");
    const [snapchat, setSnapchat] = useState("");
    const [telegram, setTelegram] = useState("");
    const [tiktok, setTiktok] = useState("");
    const [skype, setSkype] = useState("");
    const [pinterest, setPintreset] = useState("");
    const [shortdisc, Setshortdisc] = useState("");
    const [religion, setReligion] = useState("Islam");
    const [region, setRegion] = useState("");
    const [bio, setBio] = useState("");
    const [github, setGithub] = useState("");
    const [linkedind, setLinkedin] = useState("");
    const [Stackoverflow, setStackoverflow] = useState("");
    const [fiver, setFiver] = useState("");
    const [upwork, setUpwork] = useState("");
    const [cv, setCv] = useState("");
    const [submit, setSubmit] = useState(false);

    const [shouldShow, setShouldShow] = useState(true)

    const submitData = () => {

        if (!name || !cnic || !phone || !address || !email || !profile || !age || !shortdisc) {
            setSubmit(true)
        }
        else {

            var formdata = new FormData();
            formdata.append("profile_photo", profile, "[PROXY]");
            formdata.append("cover_photo", cover, "[PROXY]");
            formdata.append("name", name);
            formdata.append("phone", phone);
            formdata.append("gmail", email);
            formdata.append("snapchat", snapchat);
            formdata.append("instagram", instagram);
            formdata.append("linkedin", linkedind);
            formdata.append("twitter", twiter);
            formdata.append("github", github);
            formdata.append("facebook", facebook);
            formdata.append("bio", bio);
            formdata.append("short_desc", shortdisc);
            formdata.append("long_desc", "23e");
            {
                cv ?
                    formdata.append("cv", cv, "[PROXY]") : console.log("Cv is Empty")
            }
            formdata.append("whatsapp", whatsapp);
            formdata.append("whatsapp_b", whatsapp_b);
            formdata.append("payment_status", "23e23");
            formdata.append("telegram", telegram);
            formdata.append("tiktok", tiktok);
            formdata.append("skype", skype);
            formdata.append("printest", pinterest);
            formdata.append("age", age);
            formdata.append("religion", religion);
            formdata.append("region", region);
            formdata.append("cnic", cnic);
            formdata.append("stackoverflow", Stackoverflow);
            formdata.append("fiverr", fiver);
            formdata.append("upword", upwork);
            formdata.append("order_status", "new");
            formdata.append("ready_to_review", 0);
            formdata.append("address", address)

            axios.post(`adddata`, formdata)
                .then((response) => {
                    toast.info("Data sumbitted!")
                    setInterval(() => {
                        window.location.reload(true)
                    }, 2000)
                    console.log(response)
                })
                .catch((error) => {
                    toast.warn("error while submitting");
                    console.log(error)

                })
        }
    }

    function oncloseModal() {
        setShouldShow((prev) => !prev)
    }

    function SignUp() {
        return (
            <div className='card-body'>
                <div className='d-flex'>
                    <div className=' mt-3'>
                        <img src="./source/assets/images/logo.png" style={{ width: "115px" }} alt="" />
                    </div>
                    <button onClick={() => {
                        oncloseModal(false)
                    }} className='btn btn-outline-danger btn-sm ms-auto mt-2'>X</button>
                </div>

                <div className='d-flex mt-5 mb-3'>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label text-white">First Name</label>
                        <input type="text" className="form-control text-white me-1" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label text-white ">Last Name</label>
                        <input type="text" className="form-control text-white ms-1" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-white">Email</label>
                    <input type="email" className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-white">Password</label>
                    <input type="password" className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-white">Confirm Password</label>
                    <input type="password" className="form-control text-white" id="exampleInputPassword1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input text-white" id="exampleCheck1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                    <label className="form-check-label text-white" htmlFor="exampleCheck1" >Check me out</label>
                </div>

                <div className='d-flex  me-3'>
                    <Link to='/SignIn' id="emailHelp" className="form-text mt-3"></Link>

                    <div className="border-button ms-auto btnAnimate">
                        <a href="#" target="_blank">Sign Up</a>
                    </div>

                </div>
            </div>
        )
    }

    function SingIn() {
        return (
            <div className='card-body'>
                <div className='d-flex'>
                    <div className=' mt-3'>
                        <img src="./source/assets/images/logo.png" style={{ width: "115px" }} alt="" />
                    </div>
                    <button className='btn btn-outline-danger btn-sm ms-auto mt-2' onClick={() => {
                        oncloseModal(false)
                    }}>X</button>
                </div>
                <div className="mb-3 mt-5">
                    <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
                    <input type="email" className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                </div>
                <div className="mb-3 mt-4">
                    <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
                    <input type="password" className="form-control text-white" id="exampleInputPassword1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input text-white" id="exampleCheck1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                    <label className="form-check-label text-white" htmlFor="exampleCheck1" >Check me out</label>
                </div>

                <div className='d-flex '>
                    <a id="emailHelp" className="form-text mt-3 me-2">Welcome Back To our site</a>

                    &nbsp;&nbsp;<div className="me-4 border-button ms-auto btnAnimate">
                        <a href="#" target="_blank">Login</a>
                    </div>
                </div>

            </div>
        )
    }

    function RenderFunction() {
        return (
            <SignUp />
        )
    }


    return (
        <div>
            <Modal open={openModal} >
                <div className='card-body'>
                    <button onClick={() => setOpenModal(false)} className='btn btn-sm btn-danger float-end'>X</button>
                    <div className="row">
                        <h3 className="text-center mt-2">YOUR ORDER HAS BEEN RECEIVED!</h3>
                        <h4 className="text-center mt-2">Thank you for your purchasing</h4>
                        <p className="text-center">Your order id # is: 000023</p>
                        <p className="text-center mt-3">You will receive an order confirmation email with details of your order &#128512;</p>
                        <h2 className='mt-3 text-center'>Do You want to Create your Digital Website? </h2>
                        <div className='mx-auto'>
                            <Link to='/PortfolioForm' className="btn btn-secondary float-end mt-4">Yes sure!</Link>
                            <button onClick={() => setOpenModal(false)} className="btn btn-danger float-end me-2 mt-4">Maybe Later</button>
                        </div>
                    </div>

                </div>
            </Modal>

            <Modal
                open={shouldShow}
            >
                <RenderFunction />
            </Modal>
            <div className="page-heading normal-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h6>DigiCard Market</h6>
                            <h2>Buy Your DigiCard Now.</h2>
                            <span className=''>Home &gt; <a href="#">Shop</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item-details-page">
                <div className="container">
                    <div className="row">

                        <div className='contactWhatsapp card-body col-lg-2' >
                            <div className='d-flex'>
                                <a className='text-white' target={'_blank'} href="tel:03034450790" >Buy through Whatsapp</a>
                                <img src="./source/assets/images/whatsapp-color-icon.png" alt="whatsapp icon" style={{ height: "40px", width: "40px" }} />
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="section-heading">
                                <div className="line-dec" />
                                <h2>Apply For <em>Your Item</em> Here.</h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div id="contact" >
                                <div className="row">
                                    <hr style={{ width: "320px", height: "3px", color: "#7453fc", borderRadius: "10px" }} />
                                    <h3 className='mb-4' style={{ color: "#7453fc" }}>Digi Card:
                                    </h3>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Name*</label>
                                            <input onChange={(e) => Setname(e.target.value)} style={{ borderRadius: "16px", backgroundColor: "#282b2f", borderColor: name === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder="Ex. Ali Ahmed" autoComplete="on" type='text' />
                                            {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""}
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Phone Number*</label>
                                            <input onChange={(e) => Setname(e.target.value)} style={{ borderRadius: "16px", backgroundColor: "#282b2f", borderColor: name === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder="Enter your current phone no." autoComplete="on" type='number' />
                                            {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""}
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Contact Number*</label>
                                            <input onChange={(e) => Setname(e.target.value)} style={{ borderRadius: "16px", backgroundColor: "#282b2f", borderColor: name === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder="Enter your whatsapp number" autoComplete="on" type='number' />
                                            {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""}
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Email*</label>
                                            <input onChange={(e) => Setname(e.target.value)} style={{ borderRadius: "16px", backgroundColor: "#282b2f", borderColor: name === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder='Ex. user@mail.com' autoComplete="on" type='number' />
                                            {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""}
                                        </fieldset>
                                    </div>

                                    <div className="col-lg-12 mb-3">
                                        <fieldset>
                                            <label htmlFor="title">Address</label>
                                            <textarea className="form-control text-white" onChange={(e) => setBio(e.target.value)} style={{ borderRadius: "16px", backgroundColor: '#282b2f', borderColor: '#404245', borderRadius: "20px" }} id="exampleFormControlTextarea1" rows={7} placeholder="Enter your shipping method ..." defaultValue={""} />
                                            {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""}
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Country, Region</label>
                                            <input onChange={(e) => Setname(e.target.value)} style={{ borderRadius: "16px", backgroundColor: "#282b2f", borderColor: name === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder="Enter your region" autoComplete="on" type='text' />
                                            {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""}
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">City*</label>
                                            <input onChange={(e) => Setname(e.target.value)} style={{ borderRadius: "16px", backgroundColor: "#282b2f", borderColor: name === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder="Your current city" autoComplete="on" type='text' />
                                            {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""}
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Postal Code*</label>
                                            <input onChange={(e) => Setname(e.target.value)} style={{ borderRadius: "16px", backgroundColor: "#282b2f", borderColor: name === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder="Your city Postal code" autoComplete="on" type='number' />
                                            {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""}
                                        </fieldset>
                                    </div>

                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="file">Upload Profile Picture*</label>
                                            <input type="file" id="file" name="myfiles[]" multiple />
                                        </fieldset>
                                    </div>

                                    <div class="col-lg-6 mx-auto">
                                        <fieldset>
                                            <button onClick={() => setOpenModal(true)} type="submit" id="form-submit" class="orange-button">Submit Your Applying</button>
                                        </fieldset>
                                    </div>



                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemForm