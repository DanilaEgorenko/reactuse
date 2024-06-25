import { useStopwatch } from './useStopwatch';

const Demo = () => {
  const { seconds, minutes, start, pause, reset } = useStopwatch();

  return (
    <div>
      <p>
        <code>{minutes}</code>:<code>{seconds}</code>
      </p>
      <button type='button' onClick={start}>
        Start
      </button>
      <button type='button' onClick={pause}>
        Pause
      </button>
      <button type='button' onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Demo;
