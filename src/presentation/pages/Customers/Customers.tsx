import { useState } from 'react';
import { useUserStore } from '@store/userStore';
import Main from '@presentation/layouts/Main';
import { Col, Container, Row } from '@components/ui/Grid';
import { Typography } from '@components/ui/Typography';
import { Button } from '@components/ui/FormElements';
import Modal from '@components/ui/Modal';
import Card from '@components/ui/Card';
import { CustomerProps } from '@domain/interfaces/CustomersProps';

export default function Clients() {
  const user = useUserStore((state) => state.user);

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const handleOpenModal = (content: string, title: string) => {
    setModalContent(content);
    setShowModal(true);
    setModalTitle(title);
  };

  return (
    <Main>
      <Container>
        <Row>
          <Col>
            <Typography>
              <span>{user.customers?.length}</span> clientes encontrados
            </Typography>
          </Col>
        </Row>
        <Row>
          {user.customers?.map((item: CustomerProps) => (
            <Col key={item.id} $lg={3} $md={6} $sm={12} $xs={12}>
              <Card
                id={item.id}
                name={item.name}
                salary={item.salary}
                companyValue={item.companyValue}
              />
            </Col>
          ))}
        </Row>
        <Row>
          <Col>
            <Button onClick={() => handleOpenModal('Create', 'Criar cliente:')}>
              Criar cliente
            </Button>
          </Col>
        </Row>
        {showModal && (
          <Modal
            modalTitle={modalTitle}
            content={modalContent}
            onClose={() => setShowModal(false)}
          />
        )}
      </Container>
    </Main>
  );
}
