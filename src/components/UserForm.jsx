import { useState } from "react";
import OtherInfo from "./OtherInfo";
import PersonalInfo from "./PersonalInfo";
import SignUpInfo from "./SignUpInfo";

const UserForm = () => {
    
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
        nationality: "",
        other: ""
    });

    const FormTitles = [
        "Sign Up",
        "Personal Info",
        "Other"
    ];

    const pageDisplay = () => {
        switch (page) {
            case 0:
                return <SignUpInfo formData={formData} setFormData={setFormData}/>;
            case 1:
                return (
                  <PersonalInfo formData={formData} setFormData={setFormData} />
                );
            case 2:
                return (
                  <OtherInfo formData={formData} setFormData={setFormData} />
                );
            default:
                return (
                  <SignUpInfo formData={formData} setFormData={setFormData} />
                );
        }
    }

    return (
      <div className="form">
        <div className="progressbar">
          <div style={{width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}></div>
        </div>
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">
            {pageDisplay()}
          </div>
          <div className="footer">
            <button disabled={page === 0}
              onClick={() => {
                setPage(page - 1);
              }}
            >
              Prev
            </button>
            <button
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("Form submitted");
                } else {
                  setPage(page + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    );
}

export default UserForm
