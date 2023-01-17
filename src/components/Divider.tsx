type DividerProps = {
  format?: 'horizontal' | 'vertical';
};

export default function Divider({ format = 'horizontal' }: DividerProps) {
  return (
    <hr
      className={`w-16 h-[2px] rounded bg-amber-400 border-0 ${
        format === 'vertical' && 'rotate-90'
      }`}
    />
  );
}
