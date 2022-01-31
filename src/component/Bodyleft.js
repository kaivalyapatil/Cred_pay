import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BodyLeft() {
  let navigate = useNavigate();

  const userprofile = () => navigate("/userprofile");

  const addcreditcard = () => navigate("/addcreditcard");

  const updateemail = () => navigate("/updateemail");

  return (
    <div className="row ">
      <div className="d-grid gap-2 mt-5 px-4">
        <Button variant="secondary" size="lg mb-3" onClick={addcreditcard}>
          Add Card
        </Button>
        <Button variant="secondary" size="lg mb-3" onClick={updateemail}>
          Update Email
        </Button>
        <Button variant="secondary" size="lg mb-3" onClick={userprofile}>
          My Profile
        </Button>
      </div>
    </div>
  );
}
