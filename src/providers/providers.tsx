import Mantine_Provider from "./mantine-providers";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return <Mantine_Provider>{children}</Mantine_Provider>;
}
