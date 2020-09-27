import React from "react";
//
import TextEdit from "../components/TextEdit";
import Label from "../components/Label";
import Button from "../components/Button";
import {log} from "util";

enum LoginFormMode {
    MODE_INVALID,
    MODE_LOGIN,
    MODE_SIGNUP,
}

const LoginForm = (props: any) => {

    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [mode, setMode] = React.useState(LoginFormMode.MODE_LOGIN)

    // Will only get called on mount, one time.
    React.useEffect(() => {
        console.log("Component Did Load")
    }, [])

    // Will get called whenever the state items
    // in the arg list are changes
    React.useEffect(() => {
        console.log("One of the things changed")
    }, [email, username, password])

    const handleButtonClicked = (event: React.MouseEvent<HTMLButtonElement>) => {

        switch (event.currentTarget.id) {
            case "btnSubmit": {
                console.log("Submit")
                break
            }
        }
    }

    const handleTextChanged = (event: React.ChangeEvent<HTMLInputElement>) => {

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

    const logSomething = (message: any) => {
        console.log(message)
    }

    return (

        <div style={{
            display: "flex",
            width: "300px",
            flexDirection: "column",
            alignItems: "flexcenterx",
            justifyContent: "center",
        }}>

            {logSomething("Render")}

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

            {/*// Only render the password2 field if mode is signup.*/}
            {/*// Simply setting hidden to true still causes the element*/}
            {/*// to be added to the DOM.*/}
            {
                (mode === LoginFormMode.MODE_SIGNUP) ?
                    <TextEdit
                        id={"tePassword2"}
                        onTextChanged={handleTextChanged.bind}
                    /> : null
            }

            <Button
                id={"btnSubmit"}
                text={"Submit"}
                onClicked={handleButtonClicked}
            />

        </div>
    )

}

export default React.memo(LoginForm)