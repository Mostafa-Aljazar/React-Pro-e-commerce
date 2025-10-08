import { Flex, Stack, Text } from "@mantine/core";
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

export function Music_Countdown_Timer({ targetDate }: CountdownTimerProps) {
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
    <Stack
      gap={0}
      align="center"
      justify="center"
      w={60}
      h={60}
      className="bg-white rounded-full"
    >
      <Text fz={18} fw={600} lh={1.2} c={"dark"}>
        {String(value).padStart(2, "0")}
      </Text>
      <Text fz={{ base: 12 }} c={"dark"}>
        {label}
      </Text>
    </Stack>
  );

  return (
    <Flex
      direction={"row"}
      gap={{ base: 8, sm: 12, md: 16 }}
      align="center"
      wrap={"nowrap"}
    >
      {renderUnit("Days", timeLeft.days)}
      {renderUnit("Hours", timeLeft.hours)}
      {renderUnit("Minutes", timeLeft.minutes)}
      {renderUnit("Seconds", timeLeft.seconds)}
    </Flex>
  );
}
