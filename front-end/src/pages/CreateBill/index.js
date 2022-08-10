import LoggedHeader from "../../components/LoggedHeader";
import NewBillContainer from "../../components/NewBillContainer";
import { Container } from "./style";

export default function CreateBill() {
  return (
    <Container>
      <LoggedHeader />
      <h2>Nova conta</h2>

      <NewBillContainer />
    </Container>
  );
}
