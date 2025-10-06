import { Box, Flex, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

export function Countdown_Timer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0),
        hours: Math.max(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          0
        ),
        minutes: Math.max(
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          0
        ),
        seconds: Math.max(Math.floor((distance % (1000 * 60)) / 1000), 0),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const renderUnit = (label: string, value: number) => (
    <Stack gap={0} align="center">
      <Text fz={{ base: 10, sm: 12, md: 14 }}> {label} </Text>
      <Text
        fz={{ base: 20, sm: 25, md: 28 }}
        fw={{ base: 600, sm: 700 }}
        lh={1.2}
      >
        {String(value).padStart(2, "0")}
      </Text>
    </Stack>
  );

  const renderSeparator = () => (
    <Box fz={{ base: 16, sm: 20, md: 24 }} fw={{ base: 600, sm: 700 }} c="red">
      :
    </Box>
  );

  return (
    <Flex
      direction={"row"}
      gap={{ base: 8, sm: 12, md: 16 }}
      align="center"
      wrap={"nowrap"}
    >
      {renderUnit("Days", timeLeft.days)}
      {renderSeparator()}
      {renderUnit("Hours", timeLeft.hours)}
      {renderSeparator()}
      {renderUnit("Minutes", timeLeft.minutes)}
      {renderSeparator()}
      {renderUnit("Seconds", timeLeft.seconds)}
    </Flex>
  );
}
