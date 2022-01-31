import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BodyLeft() {
  let navigate = useNavigate();
  let custid = sessionStorage.getItem("id");

  const showuser = () => {
    if (custid == 1) {
      navigate("/userdetails");
    } else {
      console.log(custid);
      alert("please login");
      navigate("/login");
    }
  };

  const userprofile = () => navigate("/adminprofile");

  const updateemail = () => navigate("/updateemail");

  return (
    <div className="row">
      <div className="d-grid gap-2 mt-5 ms-4">
        <Button variant="info" size="lg mb-3" onClick={userprofile}>
          My Profile
        </Button>
        <Button variant="info" size="lg mb-3" onClick={updateemail}>
          Update Email
        </Button>

        <Button variant="info" size="lg " onClick={showuser}>
          Show User Details
        </Button>
      </div>
    </div>
  );
}
