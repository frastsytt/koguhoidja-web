import { Card, Image, Text, Badge, Button, Group, Container, Center } from '@mantine/core';

export default function ArticleCard() {
  return (
    <Container size="15rem" px={0}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Center>
        <Image
          src="https://apl-api.apollo.ee/img/600/744/resize/catalog/product//9/7/9789985772973_1.jpg"
          width={160}
          fit="scale-down"
          alt="Norway"
        />
        </Center>
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Kevade</Text>
        <Badge color="pink" variant="light">
          Limited
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        "Kevade" on 1969. aastal valminud Tallinnfilmi mängufilm, mis põhineb Oskar Lutsu jutustusel "Kevade".
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Find more info
      </Button>
    </Card>
  </Container>
  );
}