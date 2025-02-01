/* getting formelementTypes */

import CommonInput from "../common-input";

const formElementTypes ={
    INPUT : 'input',
    SELECT : 'select',
    TEXTAREA : 'textarea',
}

function CommonForm({
    formControls = [],
    buttonText,
    formData,
    setFormData,
    onSubmit
}) {
    function renderFormElement(getCurrentFormControl, getFormData) {
        let element = null;

        /* switch statement */

        switch (getCurrentFormControl.componentType) {
            case formElementTypes.INPUT:
                element = (
                    <CommonInput 
                        type={getCurrentFormControl.type}
                        placeholder={getCurrentFormControl.placeholder}
                        value={getFormData[getCurrentFormControl.name]}
                        name={getCurrentFormControl.name}
                        onChange={(event)=>
                            setFormData({
                                ...formData,
                                [getCurrentFormControl.name] : event.target.value
                            })
                        } />
                )
                break;
        
            default:
                <CommonInput 
                        type={getCurrentFormControl.type}
                        placeholder={getCurrentFormControl.placeholder}
                        value={getFormData[getCurrentFormControl.name]}
                        name={getCurrentFormControl.name}
                        onChange={(event)=>
                            setFormData({
                                ...formData,
                                [getCurrentFormControl.name] : event.target.value
                            })
                        } />
                break;
        }

        return element
    }

    return(
        <form action="common form" onSubmit={onSubmit}>
            {
                formControls.map((singleFormControl, index)=>(
                    <div key={singleFormControl.id || index}>
                        {renderFormElement(singleFormControl, formData)}
                    </div>
                ))
                
            }

            <button type="submit">
                {buttonText || "submit"}
            </button>
        </form>
    )
}
export default CommonForm