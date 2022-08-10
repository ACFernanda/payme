import { useParams } from "react-router-dom";

import LoggedHeader from "../../components/LoggedHeader";
import UpdateBillContainer from "../../components/UpdateBillContainer";
import { Container } from "./style";

export default function UpdateBill() {
  const billId = useParams().id;
  const month = useParams().month;
  const year = useParams().year;
  const paid = useParams().paid;

  return (
    <Container>
      <LoggedHeader />
      <h2>Editar conta</h2>

      <UpdateBillContainer
        billId={billId}
        month={month}
        year={year}
        paid={paid}
      />
    </Container>
  );
}
