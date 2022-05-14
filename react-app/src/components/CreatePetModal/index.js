import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import { useDispatch, useSelector } from 'react-redux';
import * as petActions from "../../store/pet"
import { useHistory } from "react-router-dom";
import { SelectButton } from 'primereact/selectbutton';
import Select from 'react-select';



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
    const [comment, setComment] = useState("");
    const [ageYear, setAgeYear] = useState("");
    const [ageMonth, setAgeMonth] = useState("");
    const [hasMicrochipped, setHasMicrochipped] = useState(false);
    const [hasSpayed, setHasSpayed] = useState(false);
    const [hasTrained, setHasTrained] = useState(false);
    const [isFriendlyWithChildren, setIsFriendlyWithChildren] = useState("");
    const [isFriendlyWithDog, setIsFriendlyWithDog] = useState("");
    const [sex, setSex] = useState("");
    const [breed, setBreed] = useState("");
    const [description, setDescription] = useState("");
    const [vetInfo, setVetInfo] = useState("");
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [selectValue, setSelectValue] = useState("");
    const selectRef = React.useRef();

    const handleChange = (selectValue)=>{
        setSelectValue(!selectValue);
    }

    const onClick = () => {
        if (selectRef.current){
            selectRef.current.focus();
        }
    }

    const url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/




    useEffect(() => {
        let errors = [];
        if (!name.length) errors.push("Please enter your pet name.")
        if (!(profileImage.match(url))) errors.push("Please enter a valid Image URL.")
        if (!size.length) errors.push("Please enter your pet size.")
        if (!ageYear.length) errors.push("Please enter your pet age.")
        if (!ageMonth.length) errors.push("Please enter your pet age.")
        if (!hasMicrochipped.length) errors.push("Please respond microchip question.")
        if (!hasSpayed.length) errors.push("Please respond spay question")
        if (!hasTrained.length) errors.push("Please respond training question")
        if (!isFriendlyWithChildren.length) errors.push("Please respond if hang along with kids")
        if (!isFriendlyWithDog.length) errors.push("Please respond if hang along with dogs")
        if (!sex.length) errors.push("Please enter your pet sexuality.")
        if (!breed.length) errors.push("Please enter your pet breed.")
        if (!description.length) errors.push("Please leave a description for your dog.")
        if (!vetInfo.length) errors.push("Please leave any vet information.")

        setErrors(errors)
    }, [name, profileImage, size, ageYear, ageMonth, hasMicrochipped, hasTrained, hasSpayed, isFriendlyWithDog, isFriendlyWithChildren, sex, breed, vetInfo, description])

    const submitNewPet = () => {
        setHasSubmitted(true)
        if (errors.length > 0) return;

        const newPetData = {};
        setUserId(sessionUser.id)
        //setPetId(pet.id)
        newPetData.userId = userId
=       newPetData.name = name
        newPetData.profileImage = profileImage
        newPetData.size = size
        newPetData.ageYear = ageYear
        newPetData.ageMonth = ageMonth
        newPetData.hasMicrochipped = hasMicrochipped
        newPetData.hasSpayed = hasSpayed
        newPetData.hasTrained = hasTrained
        newPetData.isFriendlyWithChildren = isFriendlyWithChildren
        newPetData.isFriendlyWithDog = isFriendlyWithDog
        newPetData.sex = sex
        newPetData.breed = breed
        newPetData.description = description
        newPetData.vetInfo = vetInfo


        dispatch(petActions.newPet(newPetData))
            .then(() => {
                setName("");
                setProfileImage("");
                setSize("");
                setComment("");
                setAgeYear("");
                setAgeMonth("");
                setHasMicrochipped(false);
                setHasSpayed(false);
                setHasTrained(false);
                setIsFriendlyWithChildren("");
                setIsFriendlyWithDog("");
                setSex("");
                setBreed("");
                setDescription("");
                setVetInfo("");
                setErrors([]);
                setShowModal(false);
                history.push('/Home')
                // need a .then and redirect IF you add a new trip while on another trip details page
            })
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }




    // const childrenSelectItems = [
    //     { label: "Yes", value: 1 },
    //     { label: "No", value: 2 },
    //     { label: "Unsure", value: 3 },
    //     { label: "Depends", value: 4 }

    // ];

    // const dogSelectItems = [
    //     { label: "Yes", value: 1 },
    //     { label: "No", value: 2 },
    //     { label: "Unsure", value: 3 },
    //     { label: "Depends", value: 4 }


    // ];


    // const sexSelectItems = [
    //     { label: "Male", value: 1 },
    //     { label: "Female", value: 2 }


    // ];







    return (

        <>


            <button className="PetProfileButton" onClick={() => setShowModal(true)}>
                Create A Pet Profile
            </button>
            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <div className="formContainer3">
                            <h1> Create A Pet Profile </h1>
                            <form className="new-pet-form" onSubmit={e => {
                                e.preventDefault();
                                submitNewPet();
                            }}>
                                <ul className="new-pet-errors">
                                    {hasSubmitted && errors.map((error, idx) => <li key={idx}>{error}</li>)}
                                </ul>
                                <div>
                                    <label className='petlabel'>
                                        Pet Name:
                                    </label>
                                    <input onChange={e => setName(e.target.value)} type="text" className="new-pet-name" placeholder='Name' value={name} />
                                    <label className='petlabel'>
                                        Please upload your pet image:
                                    </label>
                                    <input onChange={e => setProfileImage(e.target.value)} type="text" className="new-pet-image" placeholder='Profile Image' value={profileImage} />
                                    <label className='petlabel'>
                                        Pet Size:
                                    </label>
                                    <input onChange={e => setSize(e.target.value)} type="number" className="new-pet-size" placeholder='Size' value={size} />
                                    <label className='petlabel'>
                                       Your Dog Age in Year:
                                    </label>
                                    <input onChange={e => setAgeYear(e.target.value)} type="number" className="new-pet-age-year" placeholder="Age Year" value={ageYear} />
                                    <label className='petlabel'>
                                       Your Dog Age in Month:
                                    </label>
                                    <input onChange={e => setAgeMonth(e.target.value)} type="number" className="new-pet-age-month" placeholder="Age Month" value={ageMonth} />
                                    <label className='petlabel'>
                                        Is it microchipped?
                                    </label>
                                    <input onChange={e => setHasMicrochipped(e.target.value)} type="boolean" className="new-pet-micro" value={hasMicrochipped} />
                                    <label className='petlabel'>
                                        Is it trained?
                                    </label>
                                    <input onChange={e => setHasTrained(e.target.value)} type="boolean" className="new-pet-trained" value={hasTrained} />
                                    <label className='petlabel'>
                                        Is it friendly with children?
                                    </label>
                                    {/* <Select options={childrenSelectItems} /> */}
                                    <label className='petlabel'>
                                        Is it friendly with dogs?
                                    </label>
                                    {/* <Select options={dogSelectItems} /> */}
                                    <label className='petlabel'>
                                        Sex:
                                    </label>
                                    {/* <Select options={sexSelectItems} /> */}
                                    <label className='petlabel'>
                                       Breed:
                                    </label>
                                    <input onChange={e => setBreed(e.target.value)} type="text" className="new-pet-breed" placeholder="Breed" value={breed} />
                                    <label className='petlabel'>
                                       Tell us a bit about your dog!
                                    </label>
                                    <input onChange={e => setDescription(e.target.value)} type="text" className="new-pet-description" placeholder="Description" value={description} />
                                    <label className='petlabel'>
                                       Tell us about your pet's vet info:
                                    </label>
                                    <input onChange={e => setVetInfo(e.target.value)} type="text" className="new-pet-vet" placeholder="Vet Info" value={vetInfo} />

                                    <button id="new-pet-submit" type='submit' >Submit</button>
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
