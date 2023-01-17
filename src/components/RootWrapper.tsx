import ThemeProvider from '@/providers/ThemeProvider';

export default function RootWrapper({ children }: any) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
