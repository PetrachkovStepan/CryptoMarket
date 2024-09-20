function LoaderError(props: { item: string }) {
  return (
    <div className="flex w-[100%] flex-row items-center justify-center">
      <h1 className="m-1 text-[32px] text-white">{props.item}</h1>
    </div>
  );
}

export default LoaderError;
