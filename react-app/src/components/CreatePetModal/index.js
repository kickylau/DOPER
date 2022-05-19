import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import { useDispatch, useSelector } from 'react-redux';
import * as petActions from "../../store/pet"
import { useHistory } from "react-router-dom";
import "./CreatePet.css"



function CreatePetModal() {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [userId, setUserId] = useState(sessionUser?.id);
    //const pet = useSelector(state => state.pet);
    //const [petId, setPetId] = useState(pet.id);
    const [name, setName] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [size, setSize] = useState("");
    const [ageYear, setAgeYear] = useState("");
    const [ageMonth, setAgeMonth] = useState("");
    const [hasMicrochipped, setHasMicrochipped] = useState("Yes");
    const [hasSpayed, setHasSpayed] = useState("Yes");
    const [hasTrained, setHasTrained] = useState("Yes");
    const [isFriendlyWithChildren, setIsFriendlyWithChildren] = useState("Yes");
    const [isFriendlyWithDogs, setIsFriendlyWithDogs] = useState("Yes");
    const [sex, setSex] = useState("Male");
    const [breed, setBreed] = useState("");
    const [description, setDescription] = useState("");
    const [vetInfo, setVetInfo] = useState("");
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);


    const url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/




    // useEffect(() => {
    //     let errors = [];
    //     if (!name.length) errors.push("Please enter your pet name.")
    //     if (!(profileImage.match(url))) errors.push("Please enter a valid Image URL.")
    //     if (size.length === 0) errors.push("Please enter your pet size and it should be above 0.")
    //     if (!ageYear.length) errors.push("Please enter your pet age and it should not be nagative.")
    //     if (!ageMonth.length) errors.push("Please enter your pet age and it should not be negative.")
    //     if (!hasMicrochipped.length) errors.push("Please respond microchip question.")
    //     if (!hasSpayed.length) errors.push("Please respond spay question")
    //     if (!hasTrained.length) errors.push("Please respond training question")
    //     if (!isFriendlyWithChildren.length) errors.push("Please respond if hang along with kids")
    //     if (!isFriendlyWithDogs.length) errors.push("Please respond if hang along with dogs")
    //     if (!sex.length) errors.push("Please enter your pet sexuality.")
    //     if (!breed.length) errors.push("Please enter your pet breed.")
    //     if (!description.length) errors.push("Please leave a description for your dog.")
    //     if (!vetInfo.length) errors.push("Please leave any vet information.")

    //     setErrors(errors)
    // }, [name, profileImage, size, ageYear, ageMonth, hasMicrochipped, hasTrained, hasSpayed, isFriendlyWithDogs, isFriendlyWithChildren, sex, breed, vetInfo, description])

    const submitNewPet = (e) => {
        e.preventDefault();
        setHasSubmitted(true)
        // if (errors.length > 0) return;

        const newPetData = {};
        setUserId(sessionUser.id)
        //setPetId(pet.id)
        newPetData.userId = userId
        newPetData.name = name
        newPetData.profileImage = profileImage
        newPetData.size = size
        newPetData.ageYear = ageYear
        newPetData.ageMonth = ageMonth
        newPetData.hasMicrochipped = hasMicrochipped
        newPetData.hasSpayed = hasSpayed
        newPetData.hasTrained = hasTrained
        newPetData.isFriendlyWithChildren = isFriendlyWithChildren
        newPetData.isFriendlyWithDogs = isFriendlyWithDogs
        newPetData.sex = sex
        newPetData.breed = breed
        newPetData.description = description
        newPetData.vetInfo = vetInfo

        dispatch(petActions.newPet(newPetData))
            // .then(() => {
            //     console.log("DID NOT CATCH HERE ----------")
            //     setErrors([])
            //     setName("");
            //     setProfileImage("");
            //     setSize("");
            //     setAgeYear("");
            //     setAgeMonth("");
            //     setHasMicrochipped("");
            //     setHasSpayed("");
            //     setHasTrained("");
            //     setIsFriendlyWithChildren("");
            //     setIsFriendlyWithDogs("");
            //     setSex("");
            //     setBreed("");
            //     setDescription("");
            //     setVetInfo("");
            //     //setShowModal(false);
            // })
            .then((res) => {
                //console.log("HELLLLLLLLLLLLLO CATCH")
                //console.log("res is here ------", res)
                //const data = await res.json();
                if (res) {
                    setErrors(res)
                    //console.log("CHECK IT OUT --- ", "1", hasMicrochipped, "2", hasSpayed, "3", hasTrained, "4", isFriendlyWithChildren, "5", isFriendlyWithDogs, "6", sex)

                }
                else {
                    setShowModal(false);
                    setErrors([]);
                    setName("");
                    setProfileImage("");
                    setSize("");
                    setAgeYear("");
                    setAgeMonth("");
                    setHasMicrochipped("Yes");
                    setHasSpayed("Yes");
                    setHasTrained("Yes");
                    setIsFriendlyWithChildren("Yes");
                    setIsFriendlyWithDogs("Yes");
                    setSex("Male");
                    setBreed("");
                    setDescription("");
                    setVetInfo("");
                    history.push('/pets')
                }

                //console.log("DATA IS HERERERERERERE", data)
                //if (data && data.errors) setErrors(data.errors)
            })

        // if (data) setErrors(data)
        // else {

        //     history.push('/pets')
        // }
        // .then(() => {

        // need a .then and redirect IF you add a new trip while on another trip details page
        // })
        // .catch(async (res) => {
        //     const data = await res.json();
        //     if (data && data.errors) setErrors(data.errors);
        // });
    }



    return (

        <>

            <div className="putitdown">
                <button className="PetProfileButton" onClick={() => setShowModal(true)}>
                    Create A Pet Profile
                </button>
            </div>

            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <div className="formContainer">
                            <h1> Create A Pet Profile </h1>
                            <form className="form" onSubmit={submitNewPet}>
                                <div className="new-pet-errors">
                                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                                </div>
                                <div>
                                    <label className='label'>
                                        Pet Name:
                                    </label>
                                    <input onChange={e => setName(e.target.value)} type="text" className="input" placeholder='Name' value={name} />
                                    <label className='label'>
                                        Please upload your pet image:
                                    </label>
                                    <input onChange={e => setProfileImage(e.target.value)} type="text" className="input" placeholder='Profile Image' value={profileImage} />
                                    <label className='label'>
                                        Pet Size:
                                    </label>
                                    <input onChange={e => setSize(e.target.value)} type="integer" min={0} className="input" placeholder='Size' value={size} />
                                    <label className='label'>
                                        Your Dog Age in Year:
                                    </label>
                                    <input onChange={e => setAgeYear(e.target.value)} type="integer" min={0} className="input" placeholder="Age Year" value={ageYear} />
                                    <label className='label'>
                                        Your Dog Age in Month:
                                    </label>
                                    <input onChange={e => setAgeMonth(e.target.value)} type="integer" min={0} className="input" placeholder="Age Month" value={ageMonth} />
                                    <label className='label'>
                                        Is it microchipped?
                                    </label>
                                    {/* <input onChange={e => setHasMicrochipped(e.target.value)} type="boolean" className="new-pet-micro" value={hasMicrochipped} /> */}
                                    <select className="option" onChange={e => { setHasMicrochipped(e.target.value) }} value={hasMicrochipped} >
                                        <option value="Yes">
                                            Yes
                                        </option>
                                        <option value="No">
                                            No
                                        </option>
                                    </select>
                                    <label className='label'>
                                        Is it spayed?
                                    </label>
                                    {/* <input onChange={e => setHasMicrochipped(e.target.value)} type="boolean" className="new-pet-micro" value={hasMicrochipped} /> */}
                                    <select onChange={e => setHasSpayed(e.target.value)} className="option" value={hasSpayed} >
                                        <option value="Yes">
                                            Yes
                                        </option>
                                        <option value="No">
                                            No
                                        </option>
                                    </select>
                                    <label className='label'>
                                        Is it trained?
                                    </label>
                                    {/* <input onChange={e => setHasTrained(e.target.value)} type="boolean" className="new-pet-trained" value={hasTrained} /> */}
                                    <select onChange={e => setHasTrained(e.target.value)} className="option" value={hasTrained} >
                                        <option value="Yes">
                                            Yes
                                        </option>
                                        <option value="No">
                                            No
                                        </option>
                                    </select>
                                    <label className='label'>
                                        Is it friendly with children?
                                    </label>
                                    <select onChange={e => setIsFriendlyWithChildren(e.target.value)} className="option" value={isFriendlyWithChildren} >
                                        <option value="Yes">
                                            Yes
                                        </option>
                                        <option value="No">
                                            No
                                        </option>
                                        <option value="Unsure">
                                            Unsure
                                        </option>
                                        <option value="Depends">
                                            Depends
                                        </option>
                                    </select>
                                    {/* <Select options={childrenSelectItems} /> */}
                                    <label className='label'>
                                        Is it friendly with dogs?
                                    </label>
                                    <select onChange={e => setIsFriendlyWithDogs(e.target.value)} className="option" value={isFriendlyWithDogs} >
                                        <option value="Yes">
                                            Yes
                                        </option>
                                        <option value="No">
                                            No
                                        </option>
                                        <option value="Unsure">
                                            Unsure
                                        </option>
                                        <option value="Depends">
                                            Depends
                                        </option>
                                    </select>
                                    {/* <Select options={dogSelectItems} /> */}
                                    <label className='label'>
                                        Sex:
                                    </label>
                                    <select className="option" onChange={e => setSex(e.target.value)} value={sex} >
                                        <option value="Male">
                                            Male
                                        </option>
                                        <option value="Female">
                                            Female
                                        </option>
                                    </select>
                                    {/* <Select options={sexSelectItems} /> */}
                                    <label className='label'>
                                        Breed:
                                    </label>
                                    <input onChange={e => setBreed(e.target.value)} type="text" className="input" placeholder="Breed" value={breed} />
                                    <label className='label'>
                                        Tell us a bit about your dog!
                                    </label>
                                    <input onChange={e => setDescription(e.target.value)} type="text" className="input" placeholder="Description" value={description} />
                                    <label className='label'>
                                        Tell us about your pet's vet info:
                                    </label>
                                    <input onChange={e => setVetInfo(e.target.value)} type="text" className="input" placeholder="Vet Info" value={vetInfo} />

                                    <button id="loginButton" type='submit' >Submit</button>
                                </div>
                            </form>
                        </div>
                    </Modal >
                )
            }


        </>
    )

};


export default CreatePetModal;
