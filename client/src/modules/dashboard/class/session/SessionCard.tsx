import { IconHeart } from "@tabler/icons-react";
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
  RingProgress,
} from "@mantine/core";
import classes from "./SessionCard.module.css";
import { TSession } from "@/types/session";

export function SessionCard({
  image,
  title,
  subject,
  description,
  duration,
  course,
  sClass,
  topic_tags,
  focus,
  session_start_date,
  session_start_time,
}: TSession) {
  const features = topic_tags.map((tag, index) => (
    // add leftSection={tag.emoji} to add something to the left
    <Badge variant="light" key={index}>
      {tag}
    </Badge>
  ));

  const items = () => (
    <div className="">
      <div key={1}>
        <Text size="xs" color="dimmed">
          Class
        </Text>
        <Text fw={500} size="sm">
          {sClass}
        </Text>
      </div>
      <div key={2}>
        <Text size="xs" color="dimmed">
          Course
        </Text>
        <Text fw={500} size="sm">
          {course}
        </Text>
      </div>
      <div key={3}>
        <Text size="xs" color="dimmed">
          Focus
        </Text>
        <Text fw={500} size="sm">
          {focus}
        </Text>
      </div>
      <div key={4}>
        <Text size="xs" color="dimmed">
          Duration
        </Text>
        <Text fw={500} size="sm">
          {duration}
        </Text>
      </div>
    </div>
  );

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image
          src={
            image ??
            "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d"
          }
          alt={title}
        />
      </Card.Section>
      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
          <Badge size="sm" variant="light">
            {subject}
          </Badge>
        </Group>
        <Group gap={5}>
          <Text fz="xs" c="dimmed">
            80% completed
          </Text>
          <RingProgress
            size={18}
            thickness={2}
            sections={[{ value: 80, color: "blue" }]}
          />
        </Group>
        <Text mt="sm" mb="md" c="dimmed" fz="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Perfect for you, if you enjoy
        </Text>
        <Group gap={7} mt={5}>
          {features}
        </Group>
      </Card.Section>
      <Card.Section className={classes.footer}>{items()}</Card.Section>
      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
