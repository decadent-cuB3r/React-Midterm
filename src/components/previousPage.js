import { useHistory } from "react-router-dom";
import { Button } from "antd";

export default function PreviousButton() {
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };
  return (
    <div className="previous-button">
      <Button onClick={goToPreviousPath}>回上頁</Button>
    </div>
  );
}
