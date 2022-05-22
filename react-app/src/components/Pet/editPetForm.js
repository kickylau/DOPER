import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { editPet, loadAllPets, loadAllThePets } from '../../store/pet'
//import './EditTrip.css';

function EditPetForm({ hideModal, pet }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [name, setName] = useState(pet.name);
    const [profileImage, setProfileImage] = useState(pet.profileImage);
    const [size, setSize] = useState(pet.size);
    const [ageYear, setAgeYear] = useState(pet.ageYear);
    const [ageMonth, setAgeMonth] = useState(pet.ageMonth);
    const [hasMicrochipped, setHasMicrochipped] = useState(pet.hasMicrochipped ? "Yes" : "No");
    const [hasSpayed, setHasSpayed] = useState(pet.hasSpayed ? "Yes" : "No");
    const [hasTrained, setHasTrained] = useState(pet.hasTrained ? "Yes" : "No");
    const [isFriendlyWithChildren, setIsFriendlyWithChildren] = useState(pet.isFriendlyWithChildren);
    const [isFriendlyWithDogs, setIsFriendlyWithDogs] = useState(pet.isFriendlyWithDogs);
    const [sex, setSex] = useState(pet.sex)
    const [breed, setBreed] = useState(pet.breed)
    const [description, setDescription] = useState(pet.description)
    const [vetInfo, setVetInfo] = useState(pet.vetInfo)
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [errors, setErrors] = useState([]);


    // useEffect(() => {
    //     let errors = [];
    //     if (name.length === 0) errors.push("Please edit your pet name.")
    //     if (!profileImage.length) errors.push("Please choose your pet image.")
    //     if (size.length === 0 && +size<0) errors.push("Please enter your pet weight and it should be above 0.")
    //     if (ageYear.length === 0) errors.push("Please enter your pet age in year and it should not be nagative.")
    //     if (ageMonth.length === 0) errors.push("Please enter your pet age in month and it should not be nagative.")
    //     if (hasSpayed.length === 0) errors.push("Please enter if you pet has spayed.")
    //     if (hasMicrochipped.length === 0) errors.push("Please enter if you pet has microchipped.")
    //     if (hasTrained.length === 0) errors.push("Please enter if your pet has trained.")
    //     if (!isFriendlyWithChildren.length) errors.push("Please enter if your pet is friendly with children.")
    //     if (!isFriendlyWithDogs.length) errors.push("Please enter if your pet is friendly with dogs.")
    //     if (!sex.length) errors.push("Please enter your pet sex.")
    //     if (!breed.length) errors.push("Please enter your pet breed.")
    //     if (!description.length) errors.push("Please describe something about your pet.")
    //     if (!vetInfo.length) errors.push("Please enter your pet vet information.")

    //     setErrors(errors)
    // }, [name, profileImage, size, ageYear,ageMonth, hasMicrochipped, hasSpayed, hasTrained, isFriendlyWithDogs,isFriendlyWithChildren, sex, breed, vetInfo, description])

    const submitPetEdits = async (e) => {
        e.preventDefault();
        // hideModal()  WE GOT RID OF THIS JUST IN CASE!! NOT TESTED
        //setHasSubmitted(true)
        //if (errors.length > 0) return;

        const editedPetData = pet
        editedPetData.name = name
        editedPetData.profileImage = profileImage
        editedPetData.size = size
        editedPetData.ageYear = ageYear
        editedPetData.ageMonth = ageMonth
        editedPetData.hasSpayed = hasSpayed
        editedPetData.hasMicrochipped = hasMicrochipped
        editedPetData.hasTrained = hasTrained
        editedPetData.isFriendlyWithChildren = isFriendlyWithChildren
        editedPetData.isFriendlyWithDogs = isFriendlyWithDogs
        editedPetData.sex = sex
        editedPetData.breed = breed
        editedPetData.vetInfo = vetInfo
        editedPetData.description = description


        dispatch(editPet(editedPetData)).then((res) => {
            if (res) setErrors(res)
            else {
                // dispatch(loadAllPets()).then(() => {
                    hideModal()
                // })


            }

        })
        // const data = await dispatch(editPet(editedPetData))
        // console.log("THIS IS DATA------", data)
        //     // .then(() => {
        //     //     dispatch((loadAllPets()))
        //     // })
        //     //.then(() => hideModal())
        //     if (data) setErrors(data)
        //     else {
        //         setErrors([])
        //         dispatch(loadAllPets()).then(()=>{
        //            hideModal()
        //         })
        //     }
        // .catch( (res) => {
        //     const data =  res.json();
        //     if (data && data.errors) setErrors(data.errors);
        // });
    };

    const handleCancelClick = (e) => {
        e.preventDefault()
        hideModal();
    };

    return (
        <div className="formContainer">
            <h4> Edit Pet Profile </h4>
            <form className="form"
                onSubmit={submitPetEdits}>
                <ul className="new-reservation-errors">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div>
                    <label className='label'>
                        Pet Name:
                    </label>
                    <input onChange={e => setName(e.target.value)} type="text" className="new-pet" placeholder='Name' value={name} />
                    <label className='label'>
                        Please upload a valid URL for pet image:
                    </label>
                    <input onChange={e => setProfileImage(e.target.value)} type="text" className="new-pet" placeholder="Image" value={profileImage} />
                    <label className='label'>
                        Pet Size (pounds):
                    </label>
                    <input onChange={e => setSize(e.target.value)} type="integer" className="new-pet" value={size} min={0} />
                    <label className='label'>
                        Pet Age (Year):
                    </label>
                    <input onChange={e => setAgeYear(e.target.value)} type="integer" className="new-pet" min={0} value={ageYear} />
                    <label className='label'>
                        Pet Age (Month):
                    </label>
                    <input onChange={e => setAgeMonth(e.target.value)} type="integer" className="new-pet" min={0} value={ageMonth} />
                    <label className='label'>
                        Has Microchipped?
                    </label>
                    <select id="option" onChange={e => setHasMicrochipped(e.target.value)} value={hasMicrochipped} >
                        <option value="Yes">
                            Yes
                        </option>
                        <option value="No">
                            No
                        </option>
                    </select>
                      <label className='label'>
                        Has Spayed?
                    </label>
                    <select id="option" onChange={e => setHasSpayed(e.target.value)} value={hasSpayed} >
                        <option value="Yes">
                            Yes
                        </option>
                        <option value="No">
                            No
                        </option>
                    </select>
                    <label className='label'>
                        Has Trained?
                    </label>
                    <select id="option" onChange={e => setHasTrained(e.target.value)} value={hasTrained} >
                        <option value="Yes">
                            Yes
                        </option>
                        <option value="No">
                            No
                        </option>
                    </select>

                    <label className='label'>
                        Friendly with Children:
                    </label>
                    <select id="option" onChange={e => setIsFriendlyWithChildren(e.target.value)} value={isFriendlyWithChildren} >
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
                    <label className='label'>
                        Friendly with Dogs:
                    </label>
                    <select id="option" onChange={e => setIsFriendlyWithDogs(e.target.value)} value={isFriendlyWithDogs} >
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
                    <label className='label'>
                        Sex:
                    </label>
                    <select id="option" onChange={e => setSex(e.target.value)} value={sex} >
                        <option value="Male">
                            Male
                        </option>
                        <option value="Female">
                            Female
                        </option>
                    </select>
                    <label className='label'>
                        Breed:
                    </label>
                    <input  onChange={e => setBreed(e.target.value)} type="text" className="new-pet" value={breed} />
                    <label className='label'>
                        Description:
                    </label>
                    <input onChange={e => setDescription(e.target.value)} type="text" className="new-pet" value={description} />
                    <label className='label'>
                        Vet Information:
                    </label>
                    <input onChange={e => setVetInfo(e.target.value)} type="text" className="new-pet" value={vetInfo} />

                    <button id="loginButton" type='submit' >Submit</button>
                    {/* <button id="loginButton" className="cancel" onClick={handleCancelClick}>Cancel</button> */}
                </div>
            </form>
        </div>
    )
}

export default EditPetForm;
