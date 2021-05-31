import React from 'react';
import Modal from 'react-modal';
const CharacterModal = ({ visibility, handleVisibility, characterDetails }) => {
    return (
        <Modal
            isOpen={visibility}
            ariaHideApp={false}
            contentLabel="Character details"
            closeTimeoutMS={200}>
            <img src={characterDetails.img} className="image"/>
            <h4>Name: {characterDetails.name}</h4>
            <h5>Known As: {characterDetails.nickname}</h5>
            <p>Birthday: {characterDetails.birthday}</p>
            <ol>
            {characterDetails.occupation.map((occupation) => <li key={occupation}>{occupation}</li>)}
            <button onClick={handleVisibility}>Close</button>
            </ol>
            </Modal>
    );
}

export default CharacterModal;
