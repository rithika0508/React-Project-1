import React, {useContext, useState} from 'react';
import CharacterModal from './Modal';
import characterContext from '../context/characterContext';

const SingleCharacter = ({ name, birthday, img, nickname, occupation }) => {
    const Details = {
        name,
        birthday,
        img, 
        nickname,
        occupation
    }
    const [bool, setBool] = useState(false)
    const {visibility, setVisibility} = useContext(characterContext);
    const handleModalVisibility = () => {
        setBool(true)
        setVisibility(true);
    }
    const handleVisibility = () => {
        setVisibility(false)
    }
    return (
        <div>
            <div className="card" style={{width: 15+'rem'}}>
                <img className="card-img-top" src={img} alt="Card image cap" style={{height: 18+'rem'}}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Known As: {nickname}</p>
                    <a href="#" className="btn btn-primary" onClick={handleModalVisibility}>know More</a>
                </div>
            </div>
            {bool && <CharacterModal visibility={visibility} handleVisibility={handleVisibility} characterDetails={Details} />}
            
        </div>
    );
};
export default SingleCharacter;

