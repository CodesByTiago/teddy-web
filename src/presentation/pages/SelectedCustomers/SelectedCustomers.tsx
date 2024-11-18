import Main from '@presentation/layouts/Main';
import { Col, Container, Row } from '@components/ui/Grid';
import { Typography } from '@components/ui/Typography';
import Card from '@components/ui/Card';
import { Button } from '@components/ui/FormElements';
import { useUserStore } from '@store/userStore';

export default function SelectedClients() {
  const { selectedCustomers, clearSelected } = useUserStore();

  const handleClearSelected = () => {
    clearSelected();
  };

  return (
    <Main>
      <Container>
        <Row>
          <Col>
            <Typography>
              <span>{selectedCustomers?.length}</span> clientes selecionados
            </Typography>
          </Col>
        </Row>
        <Row>
          {selectedCustomers?.map((item) => (
            <Col key={item.id} $lg={3}>
              <Card
                id={item.id}
                isSelected={true}
                name={item.name}
                salary={item.salary}
                companyValue={item.companyValue}
              />
            </Col>
          ))}
        </Row>
        <Row>
          <Col>
            <Button onClick={() => handleClearSelected()}>
              Limpar clientes selecionados
            </Button>
          </Col>
        </Row>
      </Container>
    </Main>
  );
}
