import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  function redirect() {
    history.push("/search-hero");
  }
  return (
    <div>
      <Image alt="Plus" fluid src="images/plus.svg" onClick={redirect} />
    </div>
  );
}
