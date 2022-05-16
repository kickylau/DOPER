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
    const [hasMicrochipped, setHasMicrochipped] = useState(pet.hasMicrochipped? "Yes":"No");
    const [hasSpayed, setHasSpayed] = useState(pet.hasSpayed? "Yes":"No");
    const [hasTrained, setHasTrained] = useState(pet.hasTrained? "Yes":"No");
    const [isFriendlyWithChildren, setIsFriendlyWithChildren] = useState(pet.isFriendlyWithChildren);
    const [isFriendlyWithDogs, setIsFriendlyWithDogs] = useState(pet.isFriendlyWithDogs);
    const [sex,setSex]= useState(pet.sex)
    const [breed,setBreed]= useState(pet.breed)
    const [description, setDescription]= useState(pet.description)
    const [vetInfo, setVetInfo]= useState(pet.vetInfo)
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (!sessionUser) history.push('/')
    }, [sessionUser])


    useEffect(() => {
        let errors = [];
        if (name.length === 0) errors.push("Please edit your pet name.")
        if (!profileImage.length) errors.push("Please choose your pet image.")
        if (size.length === 0) errors.push("Please enter your pet weight and it should be above 0.")
        if (ageYear.length === 0) errors.push("Please enter your pet age in year and it should not be nagative.")
        if (ageMonth.length === 0) errors.push("Please enter your pet age in month and it should not be nagative.")
        if (hasSpayed.length === 0) errors.push("Please enter if you pet has spayed.")
        if (hasMicrochipped.length === 0) errors.push("Please enter if you pet has microchipped.")
        if (hasTrained.length === 0) errors.push("Please enter if your pet has trained.")
        if (!isFriendlyWithChildren.length) errors.push("Please enter if your pet is friendly with children.")
        if (!isFriendlyWithDogs.length) errors.push("Please enter if your pet is friendly with dogs.")
        if (!sex.length) errors.push("Please enter your pet sex.")
        if (!breed.length) errors.push("Please enter your pet breed.")
        if (!description.length) errors.push("Please describe something about your pet.")
        if (!vetInfo.length) errors.push("Please enter your pet vet information.")

        setErrors(errors)
    }, [name, profileImage, size, ageYear,ageMonth, hasMicrochipped, hasSpayed, hasTrained, isFriendlyWithDogs,isFriendlyWithChildren, sex, breed, vetInfo, description])

    const submitPetEdits = (e) => {
        e.preventDefault();
        setHasSubmitted(true)
        if (errors.length > 0) return;

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
        editedPetData.breed= breed
        editedPetData.vetInfo = vetInfo
        editedPetData.description = description



        dispatch(editPet(editedPetData))
            .then(() => {
                dispatch((loadAllPets()))
            })
            .then(() => hideModal())
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    };

    const handleCancelClick = (e) => {
        e.preventDefault()
        hideModal();
    };

    return (
        <div className="formContainer3">
            <h1> Edit Pet Profile </h1>
            <form
                onSubmit={submitPetEdits}>
                <ul className="new-reservation-errors">
                    {hasSubmitted && errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div>

                    <label className='petlabel'>
                        Name:
                    </label>
                    <input onChange={e => setName(e.target.value)} type="text" className="new-pet-name" placeholder='Name' value={name} />
                    <label className='petlabel'>
                        Profile Image:
                    </label>
                    <input onChange={e => setProfileImage(e.target.value)} type="text" className="new-pet-image" placeholder="Image" value={profileImage} />
                    <label className='petlabel'>
                        Size:
                    </label>
                    <input onChange={e => setSize(e.target.value)} type="integer" className="new-pet-size" value={size} />
                    <label className='petlabel'>
                        Age in Year:
                    </label>
                    <input onChange={e => setAgeYear(e.target.value)} type="integer" className="new-pet-age-year" value={ageYear} />
                    <label className='petlabel'>
                        Age in Month:
                    </label>
                    <input onChange={e => setAgeMonth(e.target.value)} type="integer" className="new-pet-age-month" value={ageMonth} />
                    <label className='petlabel'>
                        Has Microchipped:
                    </label>
                    <select onChange={e => setHasMicrochipped(e.target.value)} value={hasMicrochipped} >
                        <option value="Yes">
                            Yes
                        </option>
                        <option value="No">
                            No
                        </option>
                    </select>
                    <label className='petlabel'>
                        Has Trained:
                    </label>
                    <select onChange={e => setHasTrained(e.target.value)} value={hasTrained} >
                        <option value="Yes">
                            Yes
                        </option>
                        <option value="No">
                            No
                        </option>
                    </select>
                    <label className='petlabel'>
                        Has Spayed:
                    </label>
                    <select onChange={e => setHasSpayed(e.target.value)} value={hasSpayed} >
                        <option value="Yes">
                            Yes
                        </option>
                        <option value="No">
                            No
                        </option>
                    </select>
                    <label className='petlabel'>
                        Is it friendly with Children:
                    </label>
                    <select onChange={e => setIsFriendlyWithChildren(e.target.value)} value={isFriendlyWithChildren} >
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
                    <label className='petlabel'>
                        Is it friendly with Dogs:
                    </label>
                    <select onChange={e => setIsFriendlyWithDogs(e.target.value)} value={isFriendlyWithDogs} >
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
                    <label className='petlabel'>
                        Sex:
                    </label>
                    <select onChange={e => setSex(e.target.value)} value={sex} >
                        <option value="Male">
                            Male
                        </option>
                        <option value="Female">
                            Female
                        </option>
                    </select>
                    <label className='petlabel'>
                        Breed:
                    </label>
                    <input onChange={e => setBreed(e.target.value)} type="text" className="new-pet-breed" value={breed} />
                    <label className='petlabel'>
                        Description:
                    </label>
                    <input onChange={e => setDescription(e.target.value)} type="text" className="new-pet-description" value={description} />
                    <label className='petlabel'>
                        Vet Information:
                    </label>
                    <input onChange={e => setVetInfo(e.target.value)} type="text" className="new-pet-vet-info" value={vetInfo} />

                    <button id="new-pet-submit" type='submit' >Submit</button>
                    <button id="cancel" className="cancel" onClick={handleCancelClick}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditPetForm;
