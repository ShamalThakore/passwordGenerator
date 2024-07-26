import React, {useState} from 'react'

export default function PasswordGenerator(){

    const [showError, setshowError] = useState(false);

    const [inputValue, setinputValue] = useState();

    const [checkDisabled, setcheckDisabled] = useState(true);

    const [isChecked, setisChecked] = useState(
       { checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,}
    );


    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setisChecked(prevState => ({
            ...prevState,
            [name]: checked
        }));
    }

    const generatorPasswordLength = (event) => {
        if (parseInt(event.target.value)<4) {
            setshowError(true)
        }
        else{
            setcheckDisabled(false)
            setshowError(false)
        }
        setinputValue(event.target.value)
        setupperCase('')

        // if (!event.target.value) {
        //     setupperCase('')
        //     setupperCase('')
        //     setlowerCase('')
        //     setnumber('')
        //     setsymbols('')
        //     setisChecked(false)
        // }
    }

    const [upperCase, setupperCase] = useState();

    const generatorUppercaseletter = (event) =>{

        if (event.target.checked) {
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let result = '';

         for (let i = 0; i < inputValue-3; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            const randomCharacter = characters[randomIndex];
            result += randomCharacter;
         }
            setupperCase(result)
        }
        else{
            setupperCase('')
        }
    } 

    const [lowerCase, setlowerCase] = useState();

    const generatorLowercaseletter= (event) => {
        if (event.target.checked) {
            let characters = 'abcdefghijklmnopqrstuvwxyz';
            let randomIndex = Math.floor(Math.random()*characters.length);
            let randomCharacter = characters[randomIndex];
            setlowerCase(randomCharacter)
        }
        else{
            setlowerCase('')
        }
    }

    const [number, setnumber] = useState();

    const generatorNumber= (event) => {
        if (event.target.checked) {
            let number = '0123456789';
            let randomIndex = Math.floor(Math.random()*number.length);
            let randomNumber = number[randomIndex];
            setnumber(randomNumber)
        }
        else{
            setnumber('')
        }
    }

    const [symbols, setsymbols] = useState();

    const generatorSymbols= (event) => {
        if (event.target.checked) {
            let symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
            let randomIndex = Math.floor(Math.random()*symbols.length);
            let randomSymbols = symbols[randomIndex];
            setsymbols(randomSymbols)
        } else {
            setsymbols('')
        }
    }

    return(
        <>
            <div className='container mt-5'>
                <div className='card p-3'>
                    <div className='card-title text-center'>
                        <h1>Password Generator</h1>
                    </div>

                    <div className='card-body'>
                       <div className="d-flex justify-conten-center">
                            <div>
                            Password Length : &nbsp;
                            </div>

                            <div>
                                <input className={showError==true?'form-control form-control-sm input-width error-border':'form-control form-control-sm input-width'} type="text" placeholder="Enter Password Length" aria-label=".form-control-sm example" value={inputValue} onChange={generatorPasswordLength} />
                                <span className={showError==true?'showError':'hideError'}>Password Length Minimum 4 Characters</span>
                            </div>

                            {/* <div>
                                <input type="number" />
                            </div> */}
                       </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={generatorUppercaseletter} disabled={checkDisabled}  checked={isChecked.checkbox1}  onChange={handleCheckboxChange} name="checkbox1"/> &nbsp;Include Uppercase Letters 
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={generatorLowercaseletter} disabled={checkDisabled}  checked={isChecked.checkbox2}  onChange={handleCheckboxChange} name="checkbox2"/> &nbsp;Include Lowercase Letters 
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={generatorNumber} disabled={checkDisabled}  checked={isChecked.checkbox3}  onChange={handleCheckboxChange} name="checkbox3"/> &nbsp;Include Numbers 
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={generatorSymbols} disabled={checkDisabled}  checked={isChecked.checkbox4}  onChange={handleCheckboxChange} name="checkbox4"/> &nbsp;Include Symbols
                        </div>
                    </div>
                </div>

                <br/>
                <div>
                    <pre>Password :- {upperCase}{lowerCase}{number}{symbols}</pre>
                </div>
            </div>
        </>
    )
}
