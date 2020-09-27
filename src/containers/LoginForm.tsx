import React, {MouseEvent, ChangeEvent, useState} from "react";
//
import TextEdit from "../components/TextEdit";
import Label from "../components/Label";
import Button from "../components/Button";

enum LoginFormMode {
    MODE_INVALID,
    MODE_LOGIN,
    MODE_SIGNUP,
}

const LoginForm = (props: any) => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [mode, setMode] = useState(LoginFormMode.MODE_LOGIN)

    const handleButtonClicked = (event: MouseEvent<HTMLButtonElement>) => {

        switch (event.currentTarget.id) {
            case "btnSubmit": {
                console.log("Submit")
                break
            }
        }

    }

    const handleTextChanged = (event: ChangeEvent<HTMLInputElement>) => {

        switch (event.currentTarget.id) {
            case "teEmail": {
                setEmail(event.currentTarget.value)
                break
            }
            case "teUsername": {
                setUsername(event.currentTarget.value)
                break
            }
            case "tePassword1": {
                setPassword(event.currentTarget.value)
                break
            }
            case "tePassword2": {
                // setPassword(event.target.value)
                break
            }
        }
    }

    return (

        <div style={{
            display: "flex",
            width: "300px",
            flexDirection: "column",
            alignItems: "flexcenterx",
            justifyContent: "center",
        }}>

            {/*<Button id={"btnTest"}*/}
            {/*        onClicked={handleButtonClicked}*/}
            {/*        text={"EXTRA TESTY BUTTON"}*/}
            {/*/>*/}


            <Label
                text={"Email"}
            />
            <TextEdit
                id={"teEmail"}
                onTextChanged={handleTextChanged}
            />

            <Label
                text={"Username"}
            />
            <TextEdit
                id={"teUsername"}
                onTextChanged={handleTextChanged}
            />

            <Label
                text={"Password"}
            />
            <TextEdit
                id={"tePassword1"}
                onTextChanged={handleTextChanged}
            />

            // Only render the password2 field if mode is signup.
            // Simply setting hidden to true still causes the element
            // to be added to the DOM.
            {
                (mode === LoginFormMode.MODE_SIGNUP) ?
                    <TextEdit
                        id={"tePassword2"}
                        onTextChanged={handleTextChanged.bind}
                    /> : null
            }

            <Button
                id={"btnSubmit"}
                onClicked={handleButtonClicked}
                text={"Submit"}
            />

        </div>
    )

}

export default LoginForm